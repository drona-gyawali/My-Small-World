"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Rss } from "lucide-react";

const socialLinks = [
  { href: "https://x.com/dornaoffical", label: "X", icon: Twitter },
  { href: "https://linkedin.com/in/dorna-gyawali", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/drona-gyawali", label: "GitHub", icon: Github },
  { href: "https://medium.com/@dronarajgyawali", label: "Medium", icon: Rss },
  { href: "mailto:dorna.816411@bumc.tu.edu.np", label: "Email", icon: Mail },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#experience" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/#projects" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Navigate
            </p>
            <nav className="flex flex-wrap gap-x-6 gap-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Connect
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-neutral-200 dark:border-neutral-800 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            &copy; 2026 Drona Raj Gyawali. All rights reserved.
          </p>
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            Made in Nepal.
          </p>
        </div>
      </div>
    </footer>
  );
}
