'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Github,
  ArrowUpRight,
  Minus,
  Plus,
  Globe,
  Image as ImageIcon,
} from 'lucide-react';
import { Experience } from '../types';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function ExperienceCard({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.05}
      className="group"
    >
      <div className="flex flex-row items-start justify-between gap-4">
        <div className="flex min-w-0 flex-1 flex-row items-start gap-3">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 overflow-hidden transition-colors duration-200">
            {exp.imgUrl ? (
              <Image
                src={exp.imgUrl}
                alt={`${exp.org} logo`}
                fill
                className="object-cover"
              />
            ) : (
              <ImageIcon className="h-4 w-4 text-neutral-400 dark:text-neutral-600" />
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {exp.org} / {exp.projectTag}
              </h3>
              {exp.isGSOC && (
                <span className="px-2 py-0.5 text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full border border-neutral-200 dark:border-neutral-700">
                  Google SoC
                </span>
              )}
              {exp.isMember && (
                <span className="px-2 py-0.5 text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full border border-neutral-200 dark:border-neutral-700">
                  Member
                </span>
              )}
              {exp.isContributor && (
                <span className="px-2 py-0.5 text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full border border-neutral-200 dark:border-neutral-700">
                  Contributor
                </span>
              )}

              {/* Minimalist Remote Badge */}
              {exp.isRemote && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium bg-neutral-50 dark:bg-neutral-900/50 text-neutral-500 dark:text-neutral-400 rounded-full border border-neutral-200 dark:border-neutral-800">
                  <Globe className="w-2.5 h-2.5" />
                  Remote
                </span>
              )}

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="opacity-100 transition-opacity duration-200 p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {isOpen ? (
                  <Minus className="w-3.5 h-3.5 text-neutral-400" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-neutral-400" />
                )}
              </motion.button>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              {exp.role}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col text-right text-sm text-neutral-400 dark:text-neutral-500 min-w-[88px] pt-0.5">
          <p>{exp.period}</p>
        </div>
      </div>

      {/* Accordion Expansion (Impact Details, Tags, Links) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {/* Added pl-13 to align details text exactly with the heading layout text (skipping the logo thumbnail grid width) */}
            <div className="pt-3 pb-2 pl-13">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                {exp.impact}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {exp.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={exp.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                View merged PRs
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
