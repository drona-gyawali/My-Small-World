import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { BlogPost } from '../types';
import MotionWrapper from './MotionWrapper';
import { CleanSummary } from '../lib/mardown';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const displaySummary = CleanSummary(post);

  return (
    <MotionWrapper>
      <article className="group">
        <Link
          href={`/blog/${post.slug}`}
          className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4 py-3 border-b border-neutral-100 dark:border-neutral-800 last:border-0"
        >
          <div className="min-w-0 flex-1 space-y-1">
            <h3 className="text-base font-semibold leading-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
              {post.title}
            </h3>

            <div className="line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400 [&_img]:hidden [&_figure]:hidden">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {displaySummary}
              </ReactMarkdown>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500">
              <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                {post.source}
              </span>
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1 text-sm text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors shrink-0">
            Read
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </article>
    </MotionWrapper>
  );
}
