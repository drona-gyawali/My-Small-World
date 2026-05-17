"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Project } from "../types";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }
  })
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={index * 0.05}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex flex-row items-center justify-between gap-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 px-4 py-3 no-underline transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 cursor-pointer"
      >
        <div className="min-w-0 flex-1 space-y-0.5">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 transition-colors group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
              {project.title}
            </h3>
            <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono">
              {project.tagline}
            </span>
          </div>
          <p className="line-clamp-2 text-xs text-neutral-500 dark:text-neutral-400">
            {project.description}
          </p>
        </div>
        <motion.span
          animate={{ x: isHovered ? 2 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex shrink-0"
        >
          <ArrowRight className="w-4 h-4 text-neutral-400" />
        </motion.span>
      </motion.div>
    </Link>
  );
}
