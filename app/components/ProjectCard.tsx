'use client';

import { motion } from 'framer-motion';
import { Github, ArrowUpRight, BookCheckIcon } from 'lucide-react';
import { Project } from '../types';
import Image from 'next/image';
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.05}
      className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 overflow-hidden transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm"
    >
      {/* Video / image preview */}
      <div className="px-5 pt-5 pb-2">
        <div className="relative">
          {/* Ghost frame layers */}
          <div
            className="absolute inset-0 rounded-lg border-2 border-neutral-200 dark:border-neutral-700"
            style={{ transform: 'rotate(3deg)' }}
          />
          <div
            className="absolute inset-0 rounded-lg border border-neutral-100 dark:border-neutral-800"
            style={{ transform: 'rotate(1.5deg)' }}
          />

          {/* Image — tilted, straightens on hover */}
          <div
            className="relative overflow-hidden rounded-lg w-full aspect-video bg-neutral-100 dark:bg-neutral-800"
            style={{
              transform: 'rotate(-1.5deg)',
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onMouseEnter={e =>
              ((e.currentTarget as HTMLElement).style.transform =
                'rotate(0deg) scale(1.02)')
            }
            onMouseLeave={e =>
              ((e.currentTarget as HTMLElement).style.transform =
                'rotate(-1.5deg) scale(1)')
            }
          >
            {project.imgUrl ? (
              <Image
                src={project.imgUrl}
                alt={project.title}
                fill
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-black text-neutral-200 dark:text-neutral-700 select-none tracking-tight">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="px-4 py-3 space-y-2">
        {/* Title + tagline */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {project.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  title="Live site"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {project.blog && (
                <a
                  href={project.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  title="Live site"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
          <p className="text-[11px] text-neutral-400 dark:text-neutral-500 font-mono mt-0.5">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 pt-0.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 font-mono"
            >
              {t.trim()}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
