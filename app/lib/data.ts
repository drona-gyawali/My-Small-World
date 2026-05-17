
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



export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
