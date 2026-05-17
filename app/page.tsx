import Head from "next/head";
import Link from "next/link";

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Rss,
  ArrowRight,
  Eye,
} from "lucide-react";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ExperienceCard } from "./components/ExperienceCard";
import { ProjectCard } from "./components/ProjectCard";
import { BlogCard } from "./components/BlogCard";
import MotionWrapper from "./components/MotionWrapper";

import { experiences, projects } from "./lib/data";
import { getAllBlogs } from "./lib/rss";

function SectionHeading({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <MotionWrapper>
      <div className="mb-10">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          {children}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {subtitle}
          </p>
        )}
      </div>
    </MotionWrapper>
  );
}

export default async function Home() {
  const allBlogs = await getAllBlogs();

  const socialLinks = [
    {
      href: "https://x.com/dornaoffical",
      label: "X",
      icon: <Twitter className="w-4 h-4" />,
    },
    {
      href: "https://linkedin.com/in/dorna-gyawali",
      label: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      href: "https://github.com/drona-gyawali",
      label: "GitHub",
      icon: <Github className="w-4 h-4" />,
    },
    {
      href: "https://blogs.dorna.com.np/rss.xml",
      label: "Hashnode",
      icon: <Rss className="w-4 h-4" />,
    },
    {
      href: "mailto:dorna.816411@bumc.tu.edu.np",
      label: "Email",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Head>
        <title>Drona Raj Gyawali | Software Engineer</title>

        <meta
          name="description"
          content="Software Engineer | GSoC '26 @GreedyBear Project | Backend Engineering, Distributed Systems, APIs, and Production Infrastructure."
        />
      </Head>

      <Navigation />

      <main className="page-content">
        <div className="space-y-10 pt-8">

          {/* Hero */}
          <div className="max-w-2xl mx-auto px-4">
            <MotionWrapper>
              <div className="flex flex-col gap-4">

                <div className="flex gap-4 items-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/170401554?v=4"
                    alt="Drona Raj Gyawali"
                    width={80}
                    height={80}
                    className="size-20 rounded-full object-cover ring-2 ring-neutral-200 dark:ring-neutral-800"
                  />

                  <div>
                    <h1 className="text-lg font-bold whitespace-nowrap sm:text-2xl text-neutral-900 dark:text-neutral-100">
                      Drona Raj Gyawali
                    </h1>

                    <p className="text-base text-neutral-500 dark:text-neutral-400">
                      Software Engineer | GSoC '26 @GreedyBearProject
                    </p>
                  </div>
                </div>

                <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xl">
                  Love to work on projects that demand scale, performance,
                  and clean architecture.
                </p>

                <div className="flex flex-wrap gap-1">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      title={link.label}
                      className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300 p-2"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Experience */}
          <div className="max-w-2xl mx-auto px-4" id="experience">
            <section className="space-y-2">

              <SectionHeading>
                Experience
              </SectionHeading>

              <div className="flex flex-col gap-4">
                {experiences.map((exp, i) => (
                  <MotionWrapper key={exp.id}>
                    <ExperienceCard exp={exp} index={i} />
                  </MotionWrapper>
                ))}
              </div>

              <MotionWrapper>
                <div className="flex justify-center pt-2">
                  <a
                    href="https://linkedin.com/in/dorna-gyawali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300"
                  >
                    Show all work experiences
                  </a>
                </div>
              </MotionWrapper>

            </section>
          </div>

          {/* Projects */}
          <div className="max-w-2xl mx-auto px-4" id="projects">
            <section className="space-y-2">

              <SectionHeading>
                Projects
              </SectionHeading>

              <div className="flex flex-col gap-2">
                {projects.map((project, i) => (
                  <MotionWrapper key={project.id}>
                    <ProjectCard project={project} index={i} />
                  </MotionWrapper>
                ))}
              </div>

              <MotionWrapper>
                <div className="flex justify-center pt-4">
                  <Link
                    href="https://github.com/drona-gyawali"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300"
                  >
                    Show all Projects

                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </MotionWrapper>

            </section>
          </div>

          {/* Blog */}
          <div className="max-w-2xl mx-auto px-4" id="blog">
            <section className="space-y-2">

              <div className="flex items-end justify-between mb-6">

                <SectionHeading>
                  Blog
                </SectionHeading>

                <div className="flex items-center gap-2">
                  <a
                    href="https://blogs.dorna.com.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                  >
                    Hashnode
                  </a>

                  <span className="text-neutral-300 dark:text-neutral-700">
                    ·
                  </span>

                  <a
                    href="https://medium.com/@dronarajgyawali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                  >
                    Medium
                  </a>
                </div>
              </div>

              <div className="flex flex-col">
                {allBlogs.slice(0, 3).map((post, i) => (
                  <MotionWrapper key={post.id}>
                    <BlogCard post={post} index={i} />
                  </MotionWrapper>
                ))}
              </div>

              <MotionWrapper>
                <div className="flex justify-center pt-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300"
                  >
                    Show all blogs

                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </MotionWrapper>

            </section>
          </div>

          {/* Resume */}
          <div className="max-w-2xl mx-auto px-4">
            <MotionWrapper>
              <div className="flex justify-center">
                <Link
                  href="/resume-sde.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-300"
                >
                  <Eye className="w-4 h-4" />
                  View Resume
                </Link>
              </div>
            </MotionWrapper>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}