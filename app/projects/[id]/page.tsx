import Link from 'next/link';
import MotionWrapper from '@/app/components/MotionWrapper';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Globe,
  Rss,
  Package,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';

import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { VideoPlaceholder } from '../../components/VideoPlaceholder';

import { projects, getProjectById } from '../../lib/data';
import { getProjectMarkdown } from '@/app/lib/mardown';

export async function generateStaticParams() {
  return projects.map(project => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Drona Raj Gyawali`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = getProjectById(params.id);

  const detailedDescriptionMarkdown = getProjectMarkdown(params.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950">
        <Navigation />
        <main className="max-w-2xl mx-auto px-4 pt-8 pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Project not found
          </h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Navigation />

      <main className="max-w-2xl mx-auto px-4 pt-8 pb-16">
        <MotionWrapper>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                {project.title}
              </h1>
              <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">
                {project.tagline}
              </span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Video Player */}
          <div className="mb-8">
            {project.hasVideo && (
              <VideoPlaceholder
                projectId={project.id}
                label={`${project.title} Demo`}
                videoUrl={project.videoUrl}
              />
            )}
          </div>

          {/* Action Callouts */}
          <div className="flex flex-wrap gap-2 mb-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
              <ExternalLink className="w-3 h-3" />
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Live Demo
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.blog && (
              <a
                href={project.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <Rss className="w-4 h-4" />
                Blog Post
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.marketplace && (
              <a
                href={project.marketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <Package className="w-4 h-4" />
                Marketplace
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Technical Metadata Badges */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg border border-neutral-200 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Layout Structure */}
          {project.architecture && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Architecture
              </h2>
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            </div>
          )}

          {/* Features Checklists */}
          {project.features && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Key Features
              </h2>
              <div className="flex flex-col gap-2">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                  >
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. RENDER CONTEXT: Pass the retrieved dynamic markdown string here */}
          {detailedDescriptionMarkdown && (
            <div className="mb-8 border-t border-neutral-200 dark:border-neutral-800 pt-8">
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-4">
                Overview
              </h2>

              <div className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                <div
                  className="prose prose-neutral dark:prose-invert max-w-none font-sans 
                            prose-headings:font-sans prose-headings:tracking-tight 
                            prose-code:font-mono prose-p:text-neutral-700 dark:prose-p:text-neutral-300"
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {detailedDescriptionMarkdown}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          )}
        </MotionWrapper>
      </main>

      <Footer />
    </div>
  );
}
