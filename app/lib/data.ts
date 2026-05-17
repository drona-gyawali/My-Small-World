
import { Experience, Project, BlogPost } from "../types";


export const experiences: Experience[] = [
  {
    id: "greedybear",
    role: "Core Backend & System Engineer",
    org: "GreedyBear-Project",
    orgUrl: "https://github.com/GreedyBear-Project",
    projectTag: "GreedyBear",
    period: "Jan 2026 – Present",
    impact: "Architecting a push-based API for raw telemetry ingestion at global honeypot scale. Now a project member.",
    prUrl: "https://github.com/GreedyBear-Project/GreedyBear/pulls?q=is%3Apr+author%3Adrona-gyawali+is%3Aclosed",
    tags: ["Python", "Django REST", "PostgreSQL", "DjangoQ Cluster", "ElasticSearch", "JavaScript"],
    isMember: true,
    isGSOC:true,
  },
  {
    id: "buffalogs",
    role: "Backend Engineer",
    org: "Certego",
    orgUrl: "https://github.com/certego",
    projectTag: "BuffaLogs",
    period: "Apr 2025 – Dec 2025",
    impact: "Built backend logic to detect suspicious login patterns in real time across enterprise auth pipelines.",
    prUrl: "https://github.com/certego/BuffaLogs/pulls?q=is%3Apr+author%3Adrona-gyawali+is%3Aclosed",
    tags: ["Python", "TypeScript", "Django", "ElasticSearch", "Docker", "NextJs"],
    isContributor:true
  },
];

export const projects: Project[] = [
  {
    id: "quark",
    title: "Quark",
    tagline: "High-performance RAG pipeline",
    description: "Dual-stream memory architecture with persistent context awareness. Built for deep document analysis and retrieval-augmented generation at scale.",
    tech: ["TypeScript", "Python", "UnStructred.io", "Qdrant", "  Redis", "Mem0", "Docker"],
    github: "https://github.com/drona-gyawali/Quark",
    live: "https://quark-five.vercel.app",
    hasVideo: true,
    videoUrl: "https://private-user-images.githubusercontent.com/170401554/583949505-dcf07530-a134-45db-9f93-ac8cef77bffd.mov?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzg5NDYxMTEsIm5iZiI6MTc3ODk0NTgxMSwicGF0aCI6Ii8xNzA0MDE1NTQvNTgzOTQ5NTA1LWRjZjA3NTMwLWExMzQtNDVkYi05ZjkzLWFjOGNlZjc3YmZmZC5tb3Y_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUxNlQxNTM2NTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNmI3N2VlMzAwNDJkZDNiNTM3ZjI2NGI4M2U5OTU4YzA3MTQ2MjcyMmQ4Yjg4YTM1NDJmYmIzMWUwZTljYTU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9dmlkZW8lMkZxdWlja3RpbWUifQ.wjui107hqsSnaSihUu9L1mXkKDnk9PdV9Pwzi2G9C74",
  },
  {
    id: "px47",
    title: "PX47",
    tagline: "Multimedia binary processing engine",
    description: "Scalable backend pipeline utilizing ffmpeg and audiowaveform for high-throughput stream analysis. S3-integrated with pre-signed upload flows.",
    tech: ["Node.js", "Express", "ffmpeg", "AudioWaveForm", "AWS S3", "Docker"],
    github: "https://github.com/drona-gyawali/PX47",
    hasVideo: true,
    videoUrl: "https://private-user-images.githubusercontent.com/170401554/520478042-1785c7e2-6bd2-4204-83e2-1e9cbc3faa32.webm?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzg5NDYzODgsIm5iZiI6MTc3ODk0NjA4OCwicGF0aCI6Ii8xNzA0MDE1NTQvNTIwNDc4MDQyLTE3ODVjN2UyLTZiZDItNDIwNC04M2UyLTFlOWNiYzNmYWEzMi53ZWJtP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxNiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTZUMTU0MTI4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MjgyOTQwNzM0NDFlNGUxNjM5OTQ3ZGY2NWFlYmI4YmNjMTFkNzM0YjQ5NWIzZTYwYjc2Y2ZhZDJiMWUyOWMwYyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPXZpZGVvJTJGd2VibSJ9.xeJZlFQ-l5amjbdGXfL_Zi8A1lWB5yCITElIC8H3_8A",
  },
  {
    id: "sdr9",
    title: "SDR-9",
    tagline: "Zero-bandwidth P2P file sharing",
    description: "WebRTC-based tunnel enabling direct browser-to-browser data transfer. No central server, no bandwidth limits — pure peer-to-peer architecture.",
    tech: ["WebRTC", "Node.js", "Socket.io", "TypeScript", "React"],
    github: "https://github.com/drona-gyawali/SDR-9",
    blog: "https://medium.com/@dronarajgyawali",
    hasVideo: true,
    videoUrl: "https://private-user-images.githubusercontent.com/170401554/528711384-3ec9cbf1-c4ae-4a61-aed0-545f4fbbe6a4.mov?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkwMDY2MTAsIm5iZiI6MTc3OTAwNjMxMCwicGF0aCI6Ii8xNzA0MDE1NTQvNTI4NzExMzg0LTNlYzljYmYxLWM0YWUtNGE2MS1hZWQwLTU0NWY0ZmJiZTZhNC5tb3Y_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUxN1QwODI1MTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZjI1NzViMzE2YmM1MWE2MDlmNGY0MmY1Y2Y1ZWEwMTNhNTcwNWVjYzlkMTljZmM4YWJkOTMyZWJjOTQxZTY3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9dmlkZW8lMkZxdWlja3RpbWUifQ.dhWtlSQFSIOarJ_3hc1z4c2qyDlq9noQM0tBWskoLeE",
  },
  {
    id: "varta",
    title: "Varta",
    tagline: "High-concurrency chat architecture",
    description: "Built for horizontal scale using Redis pub/sub, Kafka streams, and PostgreSQL. Handles thousands of concurrent connections with sub-50ms latency.",
    tech: ["Node.js", "Redis", "Kafka", "PostgreSQL", "WebSocket"],
    github: "https://github.com/drona-gyawali/Varta",
    hasVideo: false,
  },
  {
    id: "scanner",
    title: "Scanner",
    tagline: "VS Code security extension",
    description: "Hardcoded API key and credential scanner that runs in real-time as you type. Catches secrets before they hit version control.",
    tech: ["TypeScript", "VS Code API", "Regex Engine", "Tree-sitter", "C++", "TypeScript"],
    github: "https://github.com/drona-gyawali/secret-scanner",
    marketplace: "https://marketplace.visualstudio.com/items?itemName=drona-gyawali.secret-scanner-pro",
    hasVideo: false,
  }
];


// blogs 
export const realMediumBlogs: BlogPost[] = [
  {
    id: "medium-1",
    title: "Integrating Redis Caching in FastAPI: The Right Way",
    summary: "A comprehensive guide on implementing Redis caching in FastAPI applications with best practices, connection pooling, and cache invalidation strategies for production environments.",
    author: "Drona Raj Gyawali",
    date: "2025-08-16",
    link: "https://medium.com/@dronarajgyawali/redis-caching-fastapi",
    source: "Medium",
    slug: "redis-caching-fastapi",
    content: `## Introduction

Caching is one of the most effective ways to improve application performance. In this article, we explore how to integrate Redis caching properly in FastAPI applications.

## Why Redis?

Redis provides:
- Sub-millisecond response times
- Rich data structures (strings, hashes, lists, sets)
- Built-in pub/sub capabilities
- Automatic expiration (TTL)

## Setting Up Connection Pooling

See code examples in the full article.

## Cache Invalidation Strategies

1. **Time-based expiration**: Set TTL on all cache entries
2. **Event-based invalidation**: Clear cache on data mutations
3. **Version-based caching**: Include version in cache key

## Best Practices

- Always use connection pooling
- Implement circuit breaker for Redis failures
- Monitor cache hit rates
- Use appropriate serialization (JSON, MessagePack)
- Set reasonable TTL values based on data volatility`
  },
  {
    id: "medium-2",
    title: "Building FocusTube",
    summary: "An exploration into building a focused video consumption platform that eliminates distractions and enhances learning through structured content delivery.",
    author: "Drona Raj Gyawali",
    date: "2025-08-11",
    link: "https://medium.com/@dronarajgyawali/building-focustube",
    source: "Medium",
    slug: "building-focustube",
    content: `## The Problem

In a world of infinite scroll and endless recommendations, FocusTube was built to bring intention back to video consumption.

## Core Philosophy

- **No recommendations**: You choose what to watch
- **Structured learning**: Playlists designed for skill building
- **Distraction-free**: No comments, no likes, no algorithm

## Technical Architecture

FocusTube uses a custom video player built with:
- React for the UI layer
- WebRTC for peer-to-peer streaming
- IndexedDB for offline storage

## Key Features

1. **Intentional Playlists**: Curated learning paths
2. **Focus Mode**: Blocks distracting UI elements
3. **Note-taking**: Timestamped annotations
4. **Progress Tracking**: Visual skill trees`
  },
  {
    id: "medium-3",
    title: "Secret Scanner: Detecting Hardcoded Credentials",
    summary: "Deep dive into building an automated security tool that detects hardcoded API keys, passwords, and credentials within codebases using pattern matching and entropy analysis.",
    author: "Drona Raj Gyawali",
    date: "2025-06-10",
    link: "https://medium.com/@dronarajgyawali/secret-scanner",
    source: "Medium",
    slug: "secret-scanner",
    content: `## Security Starts in the Codebase

Secret Scanner automates the detection of hardcoded credentials before they reach production.

## Detection Methods

### 1. Pattern Matching
Regex patterns for common secret formats:
- AWS Access Keys: AKIA[0-9A-Z]{16}
- GitHub Tokens: ghp_[0-9a-zA-Z]{36}
- Slack Tokens: xox[baprs]-[0-9a-zA-Z]{10,48}

### 2. Entropy Analysis
High-entropy strings often indicate secrets. See code examples in the full article.

### 3. Context Analysis
Tree-sitter AST parsing to understand variable context and reduce false positives.

## Implementation

The scanner runs as a VS Code extension using:
- Language Server Protocol for real-time analysis
- Diagnostic API for inline warnings
- Quick Fix provider for automatic remediation`
  },
  {
    id: "medium-4",
    title: "Real Code Does not Crash: Low-Level Programming",
    summary: "An exploration into systems programming, memory management, and why understanding the metal matters for building high-performance applications.",
    author: "Drona Raj Gyawali",
    date: "2025-04-20",
    link: "https://medium.com/@dronarajgyawali/low-level-programming",
    source: "Medium",
    slug: "low-level-programming",
    content: `## The Metal Matters

Low-level programming teaches you to respect the machine. When you write C or Rust, you are not abstracting away the hardware — you are working with it.

## Memory Management

### Stack vs Heap
- **Stack**: Automatic, fast, limited size
- **Heap**: Manual, slower, virtually unlimited

See code examples in the full article.

## Why It Matters for High Performance

1. **Cache locality**: Data layout affects performance by orders of magnitude
2. **Zero-cost abstractions**: Rust's borrow checker at compile time
3. **Predictable performance**: No garbage collection pauses

## Systems Programming Concepts

- **Virtual memory**: Pages, TLB, page faults
- **Concurrency**: Atomics, memory barriers, lock-free structures
- **I/O**: Async, epoll, io_uring`
  },
  {
    id: "medium-5",
    title: "Understanding Mutable Default Arguments in Classes",
    summary: "A deep dive into Python's mutable default arguments, why they cause subtle bugs, and how ClassVar and instance-level attributes solve the problem.",
    author: "Drona Raj Gyawali",
    date: "2024-12-31",
    link: "https://medium.com/@dronarajgyawali/mutable-default-arguments",
    source: "Medium",
    slug: "mutable-default-arguments",
    content: `## The Python Gotcha

Mutable default arguments in Python classes can lead to unexpected bugs and unintended behavior.

## The Problem

See code examples in the full article.

## Solutions

### 1. Use None as Default
### 2. Use ClassVar for Class-Level Defaults
### 3. Instance-Level Initialization

All with code examples in the full article.`
  },
  {
    id: "medium-6",
    title: "Understanding Variables in Statistics",
    summary: "A beginner-friendly guide to understanding variables in statistics — from categorical to continuous, with real-world examples.",
    author: "Drona Raj Gyawali",
    date: "2024-10-03",
    link: "https://medium.com/@dronarajgyawali/statistics-variables",
    source: "Medium",
    slug: "statistics-variables",
    content: `## Variables: The Foundation of Statistics

Variables are the foundation of statistical analysis. Understanding them correctly is crucial for any data science journey.

## Types of Variables

### 1. Categorical (Qualitative)
- **Nominal**: No order (colors, gender, blood type)
- **Ordinal**: Ordered categories (ratings, education level)

### 2. Numerical (Quantitative)
- **Discrete**: Countable values (number of children, dice rolls)
- **Continuous**: Measurable values (height, weight, temperature)

## Real-World Examples

| Variable | Type | Example Values |
|----------|------|----------------|
| Age | Continuous | 25.5 years |
| Gender | Nominal | Male, Female, Other |
| Satisfaction | Ordinal | 1-5 scale |
| Number of pets | Discrete | 0, 1, 2, 3... |

## Why It Matters

Variable type determines:
- Appropriate statistical tests
- Visualization methods
- Machine learning algorithms
- Data preprocessing steps`
  },
  {
    id: "medium-7",
    title: "Statistics: Population (N) & Sample (n)",
    summary: "Clarifying the fundamental distinction between population and sample in statistics, with practical examples for data analysis and machine learning.",
    author: "Drona Raj Gyawali",
    date: "2024-10-02",
    link: "https://medium.com/@dronarajgyawali/population-vs-sample",
    source: "Medium",
    slug: "population-vs-sample",
    content: `## Population vs Sample

The difference between population and sample is fundamental to statistical inference.

## Definitions

- **Population (N)**: The entire group of interest
- **Sample (n)**: A subset of the population used for analysis

## Why Sample?

1. **Cost**: Measuring entire populations is expensive
2. **Time**: Faster results with samples
3. **Feasibility**: Some populations are impossible to measure fully

## Sampling Methods

### Probability Sampling
- **Simple Random**: Every member has equal chance
- **Stratified**: Divide into subgroups, sample from each
- **Cluster**: Divide into clusters, sample entire clusters

### Non-Probability Sampling
- **Convenience**: Whoever is available
- **Quota**: Target specific characteristics
- **Snowball**: Referrals from existing participants

## The Golden Rule

Always ask: Does my sample represent the population?`
  },
  {
    id: "medium-8",
    title: "Statistics Roadmap for ML, AI, and Data Science",
    summary: "A structured learning path covering essential statistical concepts needed for machine learning and AI — from probability theory to Bayesian inference.",
    author: "Drona Raj Gyawali",
    date: "2024-09-20",
    link: "https://medium.com/@dronarajgyawali/statistics-roadmap",
    source: "Medium",
    slug: "statistics-roadmap",
    content: `## Statistics is the Backbone of Machine Learning

This roadmap covers everything you need to know.

## Phase 1: Foundations
1. **Descriptive Statistics**: Mean, median, mode, variance
2. **Probability Theory**: Events, conditional probability, Bayes' theorem
3. **Distributions**: Normal, binomial, Poisson

## Phase 2: Inference
1. **Hypothesis Testing**: t-tests, chi-square, ANOVA
2. **Confidence Intervals**: Margin of error, significance levels
3. **Regression**: Linear, logistic, polynomial

## Phase 3: Advanced
1. **Bayesian Inference**: Priors, posteriors, MCMC
2. **Dimensionality Reduction**: PCA, t-SNE, UMAP
3. **Experimental Design**: A/B testing, causal inference

## Learning Resources

- Books: "Introduction to Statistical Learning", "Bayesian Methods for Hackers"
- Courses: MIT 18.6501, Stanford CS229
- Practice: Kaggle competitions, real datasets`
  },
  {
    id: "medium-9",
    title: "Data Analysis with Pandas: 30-Day Learning Plan",
    summary: "A day-by-day structured curriculum to master pandas for data analysis — from basic DataFrames to advanced aggregation and time-series analysis.",
    author: "Drona Raj Gyawali",
    date: "2024-09-11",
    link: "https://medium.com/@dronarajgyawali/pandas-30-day-plan",
    source: "Medium",
    slug: "pandas-30-day-plan",
    content: `## Pandas: The Swiss Army Knife of Data Analysis

This 30-day plan takes you from beginner to proficient.

## Week 1: Basics
- Day 1-2: Series and DataFrames
- Day 3-4: Reading data (CSV, Excel, SQL)
- Day 5-7: Indexing and selection

## Week 2: Manipulation
- Day 8-10: Data cleaning (missing values, duplicates)
- Day 11-13: Transformations (apply, map, groupby)
- Day 14: Mid-project: Clean a real dataset

## Week 3: Analysis
- Day 15-17: Aggregation and pivot tables
- Day 18-20: Merging and joining datasets
- Day 21: Time series basics

## Week 4: Advanced
- Day 22-24: Multi-indexing and reshaping
- Day 25-27: Performance optimization
- Day 28-30: Final project: End-to-end analysis`
  }
];

export const realHashnodeBlogs: BlogPost[] = [
  {
    id: "hashnode-1",
    title: "Designing an Order Execution Engine",
    summary: "A technical deep-dive into order execution engine architecture, exploring why conventional scaling approaches fail in high-frequency trading environments.",
    author: "Drona Raj Gyawali",
    date: "2026-05-15",
    link: "https://hashnode.com/posts/designing-an-order-execution-engine/6a07265599d875f5cd6a68d0",
    source: "Hashnode",
    slug: "order-execution-engine",
    content: `## Traditional Scaling Laws Do not Apply

Traditional scaling laws assume linear growth, but order execution engines face unique constraints.

## The Challenge

In high-frequency trading:
- Latency is measured in microseconds
- Throughput requirements are extreme
- Consistency is non-negotiable

## Architecture Decisions

### 1. Lock-Free Data Structures
Avoid mutexes entirely.

### 2. NUMA-Aware Memory Allocation
Pin threads to specific cores, allocate memory locally.

### 3. Kernel Bypass Networking
DPDK or AF_XDP for direct NIC access.

## Why Conventional Scaling Fails

1. **Lock contention**: Even rwlocks kill performance at scale
2. **Cache coherency**: False sharing between cores
3. **System calls**: Context switches are too expensive

## The Solution

Single-threaded, NUMA-aware, lock-free design with:
- Shard by symbol (each core handles subset)
- Batch processing (amortize overhead)
- Pre-allocated memory pools`
  }
];

export const allBlogs = [...realMediumBlogs, ...realHashnodeBlogs].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return allBlogs.find((blog) => blog.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
