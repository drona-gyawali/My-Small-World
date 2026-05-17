import Link from "next/link";
import { ArrowRight, ArrowLeft, Rss } from "lucide-react";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { getAllBlogs } from "../lib/rss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { CleanSummary } from "../lib/mardown";

export const metadata = {
  title: "Blog | Drona Raj Gyawali",
  description:
    "Technical writings on backend engineering and system design.",
};

export default async function BlogPage() {
  const allBlogs = await getAllBlogs();
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navigation />

      <main className="max-w-2xl mx-auto px-4 pt-8 pb-16">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Blog
          </h1>

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Technical writings on backend engineering and systems.
          </p>
        </div>

        <div className="flex flex-col">
          {allBlogs.map((post) => (
            <article key={post.id} className="group">
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-3 py-5 border-b border-neutral-100 dark:border-neutral-800"
              >
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                    {post.source}
                  </span>

                  <span className="text-xs text-neutral-400">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {post.title}
                </h2>

                <div className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed [&_img]:hidden [&_figure]:hidden">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {CleanSummary(post)}
                  </ReactMarkdown>
                </div>

                <div className="flex items-center gap-1 text-sm text-neutral-400">
                  Read article
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <Rss className="w-4 h-4" />
            <span>Auto-synced from RSS feeds</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}