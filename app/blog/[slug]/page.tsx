import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft, Calendar, User } from 'lucide-react';

import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

import { getAllBlogs, getBlogBySlug } from '../../lib/rss';

export async function generateStaticParams() {
  const blogs = await getAllBlogs();

  return blogs.map(blog => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: `${post.title} | Drona Raj Gyawali`,
    description: post.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950">
        <Navigation />

        <main className="max-w-2xl mx-auto px-4 pt-8 pb-16">
          <h1 className="text-2xl font-bold">Blog not found</h1>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navigation />

      <main className="max-w-3xl mx-auto px-4 pt-8 pb-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <article>
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-xs">
                {post.source}
              </span>

              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <Calendar className="w-4 h-4" />

                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              {post.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <User className="w-4 h-4" />
              {post.author}
            </div>
          </header>

          <div
            className="prose prose-neutral dark:prose-invert max-w-none font-sans 
            prose-headings:font-sans prose-headings:tracking-tight 
            prose-code:font-mono prose-p:text-neutral-700 dark:prose-p:text-neutral-300"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
