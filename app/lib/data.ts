import { Experience, Project, BlogPost } from '../types';

export const experiences: Experience[] = [
  {
    id: 'minder',
    role: 'Open Source Developer',
    org: 'Minder',
    orgUrl: 'https://github.com/mindersec',
    period: 'SEP 2026 - Present',
    impact:
      'Improved security posture and developer experience across Minder supply chain engine by hardening CLI client architecture, enforcing GitLab clone limits, and expanding automated test reliability.',
    prUrl:
      'https://github.com/mindersec/minder/pulls?q=is%3Apr+state%3Aclosed+author%3Adrona-gyawali',
    tags: [
      'Go',
      'gRPC',
      'PostgreSQL',
      'SQLC',
      'NATS',
      'Protobuf',
      'Docker & Helm',
    ],
    isContributor: true,
    isRemote: true,
    imgUrl: 'https://avatars.githubusercontent.com/u/183659722?s=200&v=4',
  },

  {
    id: 'gsoc',
    role: 'Engineering Intern',
    org: 'Google Summer of Code 2026',
    orgUrl: 'https://github.com/GreedyBear-Project',
    period: 'APR 2026 – SEP 2026',
    impact:
      'Earned a highly selective Google Summer of Code 2026 mentorship to engineer large-scale honeypot telemetry ingestion and automated threat intelligence pipelines for GreedyBear.',
    projectView:
      'https://summerofcode.withgoogle.com/programs/2026/projects/4SAdqqai',
    tags: [
      'Python',
      'Django REST',
      'PostgreSQL',
      'DjangoQ Cluster',
      'ElasticSearch',
      'React',
    ],
    isContributor: true,
    isRemote: true,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/85/GSoC-icon.svg',
  },
  {
    id: 'greedybear',
    role: 'Backend Contributor',
    org: 'GreedyBear-Project',
    orgUrl: 'https://github.com/GreedyBear-Project',
    period: 'JAN 2026 – APR 2026',
    impact:
      'Engineered GreedyBear’s asynchronous event collector API, telemetry models, and real-time threat enrichment services including GeoIP, ASN analytics, and credential-reuse detection.',
    prUrl:
      'https://github.com/GreedyBear-Project/GreedyBear/pulls?q=is%3Apr+author%3Adrona-gyawali+is%3Aclosed',
    tags: [
      'Python',
      'Django REST',
      'PostgreSQL',
      'DjangoQ Cluster',
      'ElasticSearch',
      'React',
    ],
    isMember: true,
    isRemote: true,
    imgUrl: 'https://avatars.githubusercontent.com/u/272869833?s=48&v=4',
  },
  {
    id: 'buffalogs',
    role: 'Backend Contributor',
    org: 'Certego',
    orgUrl: 'https://github.com/certego',
    period: 'APR 2025 – DEC 2025',
    impact:
      'Architected backend log ingestion pipelines, multi-channel alerting integrations, asynchronous Celery worker tasks, and core frontend views for the BuffaLogs security platform.',
    prUrl:
      'https://github.com/certego/BuffaLogs/pulls?q=is%3Apr+author%3Adrona-gyawali+is%3Aclosed',
    tags: [
      'Python',
      'TypeScript',
      'Django',
      'ElasticSearch',
      'Docker',
      'NextJs',
    ],
    isContributor: true,
    isRemote: true,
    imgUrl: 'https://avatars.githubusercontent.com/u/7250049?s=48&v=4',
  },
];

export const projects: Project[] = [
  {
    id: 'quark',
    imgUrl:
      'https://github-production-user-asset-6210df.s3.amazonaws.com/170401554/585522760-0d1f5226-4034-49a2-91b3-8abffb745c8a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20261028%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261028T164047Z&X-Amz-Expires=300&X-Amz-Signature=2f25a17c7833f672f94e6ae990484e2384cea669ae785e6966d44c8f86de935b&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng',
    title: 'Quark',
    tagline: 'High-performance RAG pipeline',
    description:
      'Dual-stream memory architecture with persistent context awareness. Built for deep document analysis and retrieval-augmented generation at scale.',
    tech: [
      'TypeScript',
      'Python',
      'UnStructred.io',
      'Qdrant',
      '  Redis',
      'Mem0',
      'Docker',
    ],
    github: 'https://github.com/drona-gyawali/Quark',
    live: 'https://quark-five.vercel.app',
    hasVideo: false,
  },
  {
    id: 'px47',
    imgUrl:
      'https://raw.githubusercontent.com/drona-gyawali/My-Github-Assest/refs/heads/main/dumps/Gemini_Generated_Image_4e1i2c4e1i2c4e1i.jpeg',
    title: 'PX47',
    tagline: 'Multimedia binary processing engine',
    description:
      'Scalable backend pipeline utilizing ffmpeg and audiowaveform for high-throughput stream analysis. S3-integrated with pre-signed upload flows.',
    tech: ['Node.js', 'Express', 'ffmpeg', 'AudioWaveForm', 'AWS S3', 'Docker'],
    github: 'https://github.com/drona-gyawali/PX47',
    hasVideo: true,
    videoUrl:
      'https://private-user-images.githubusercontent.com/170401554/520478042-1785c7e2-6bd2-4204-83e2-1e9cbc3faa32.webm?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzg5NDYzODgsIm5iZiI6MTc3ODk0NjA4OCwicGF0aCI6Ii8xNzA0MDE1NTQvNTIwNDc4MDQyLTE3ODVjN2UyLTZiZDItNDIwNC04M2UyLTFlOWNiYzNmYWEzMi53ZWJtP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxNiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTZUMTU0MTI4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MjgyOTQwNzM0NDFlNGUxNjM5OTQ3ZGY2NWFlYmI4YmNjMTFkNzM0YjQ5NWIzZTYwYjc2Y2ZhZDJiMWUyOWMwYyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPXZpZGVvJTJGd2VibSJ9.xeJZlFQ-l5amjbdGXfL_Zi8A1lWB5yCITElIC8H3_8A',
  },
  {
    id: 'runner',
    imgUrl:
      'https://github-production-user-asset-6210df.s3.amazonaws.com/170401554/611821782-961e0090-eb9f-4b7e-bd00-4494a3d69267.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20261028%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261028T164708Z&X-Amz-Expires=300&X-Amz-Signature=1832092c9281579f5f33fc1bd89764bb2c0f92c85c08cc0b2cc90364c2a09cbd&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng',
    title: 'Runner',
    tagline: 'Continuous integration(CI) pipeline ',
    description:
      'A minimal, sandboxed CI pipeline engine to securely isolate workflow steps inside virtualized container environments.',
    tech: ['Go', ' Sandbox', 'CI/CD', 'Docker', 'gVisor'],
    github: 'https://github.com/drona-gyawali/runner',
    blog: 'https://blogs.dorna.com.np/diy-ci-cd-engine-gvisor-docker',
    hasVideo: false,
  },
  {
    id: 'annales',
    imgUrl:
      'https://raw.githubusercontent.com/drona-gyawali/Annales/refs/heads/main/docs/blog/diagram/architecture.png',
    title: 'Annales',
    tagline: 'S3-backed,key-value store',
    description:
      'Annales keeps the current key-value state in RAM for fast reads, records every mutation as an immutable log object in S3-compatible storage, and reconstructs state from durable storage on restart.',
    tech: ['Go', 'Redis', 'PostgreSQL', 'S3 API', 'AWS S3'],
    github: 'https://github.com/drona-gyawali/Annales',
    blog: 'https://github.com/drona-gyawali/Annales/blob/main/docs/blog/architecture.md',
    hasVideo: false,
  },
  {
    id: 'llm_router',
    imgUrl:
      'https://raw.githubusercontent.com/drona-gyawali/llm_router/refs/heads/main/diagram/architecture.png',
    title: 'LLM Router',
    tagline: 'LLM gateway that routes Requests',
    description:
      'An experimental internal LLM gateway that routes requests across multiple AI providers with multi-layer guardrails, semantic routing, tenant management, and cost tracking.',
    tech: ['Python', 'Numpy', 'Embeddings', 'Eval', 'FastAPI', 'PostgreSql'],
    github: 'https://github.com/drona-gyawali/llm_router',
    hasVideo: false,
  },
  {
    id: 'sdr9',
    imgUrl:
      'https://raw.githubusercontent.com/drona-gyawali/My-Github-Assest/refs/heads/main/dumps/sdr.png',
    title: 'SDR-9',
    tagline: 'Zero-bandwidth P2P file sharing',
    description:
      'WebRTC-based tunnel enabling direct browser-to-browser data transfer. No central server, no bandwidth limits — pure peer-to-peer architecture.',
    tech: ['WebRTC', 'Node.js', 'Socket.io', 'TypeScript', 'React'],
    github: 'https://github.com/drona-gyawali/SDR-9',
    blog: 'https://github.com/drona-gyawali/SDR-9/blob/master/README.md',
    hasVideo: false,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
