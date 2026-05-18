import Parser from 'rss-parser';
import { unstable_cache } from 'next/cache';
import { BlogPost } from '../types';

const parser = new Parser();

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

function cleanHtml(htmlString: string): string {
  if (typeof window === 'undefined') return htmlString;
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  return doc.body.textContent || doc.body.innerText || '';
}

async function fetchMediumBlogs(): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL(
      'https://medium.com/feed/@dronarajgyawali'
    );
    return feed.items.map((item, index) => ({
      id: `medium-${index}`,
      title: item.title || 'Untitled',
      summary: item['content:encoded']?.slice(0, 120) || 'No summary available',
      author: item.creator || 'Drona Raj Gyawali',
      date: item.pubDate || new Date().toISOString(),
      link: item.link || '',
      source: 'Medium',
      slug: slugify(item.title || `medium-${index}`),
      content: item['content:encoded'] || item.content || '',
    }));
  } catch (err) {
    console.error('Medium RSS failed:', err);
    return [];
  }
}
async function fetchHashnodeBlogs(): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL('https://blogs.dorna.com.np/rss.xml');

    return feed.items.map((item, index) => {
      const summarySnippet = item.contentSnippet || '';

      const fullContent = item['content:encoded'] || item.content || '';

      return {
        id: `hashnode-${index}`,
        title: item.title || 'Untitled',
        summary: summarySnippet
          ? summarySnippet.slice(0, 180)
          : 'No summary available',
        author: item.creator || 'Drona Raj Gyawali',
        date: item.pubDate || new Date().toISOString(),
        link: item.link || '',
        source: 'Hashnode',
        slug: slugify(item.title || `hashnode-${index}`),
        content: fullContent,
      };
    });
  } catch (err) {
    console.error('Hashnode RSS failed:', err);
    return [];
  }
}

async function loadAllBlogsRaw(): Promise<BlogPost[]> {
  const [mediumBlogs, hashnodeBlogs] = await Promise.all([
    fetchMediumBlogs(),
    fetchHashnodeBlogs(),
  ]);

  return [...hashnodeBlogs, ...mediumBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/*
  FIXED CACHE:
  This caches the result on the server across ALL requests.
  It will only fetch from Medium/Hashnode once every 3600 seconds (1 hour).
*/
export const getAllBlogs = unstable_cache(
  async () => loadAllBlogsRaw(),
  ['all-blogs-rss-cache'],
  { revalidate: 3600 }
);

export async function getBlogBySlug(slug: string) {
  const blogs = await getAllBlogs();
  return blogs.find(blog => blog.slug === slug);
}
