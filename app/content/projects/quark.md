
A high-performance RAG (Retrieval-Augmented Generation) system designed for deep document analysis and persistent context awareness. This project implements a sophisticated architecture that synchronizes unstructured text and image data, utilizing a dual-memory layer for a truly personalized chat experience.

## Architecture Overview

Quark distinguishes itself through a multi-stage pipeline:

#### Multimodal Ingestion
* **Partitioning:** Leveraging `Unstructured.io` for semantic text decomposition and layout analysis.
* **Extraction:** Utilizing `pdfplumber` for precise image and table coordinate extraction.
* **Sync Layer:** A custom orchestration layer that aligns text and visual modalities for comprehensive multimodal embeddings.

#### Dual-Stream Memory
* **STM (Short-Term Memory):** Powered by **Redis**. Provides sub-millisecond access to rapid session-based context and transient state.
* **LTM (Long-Term Memory):** Powered by **Mem0**. Acts as a persistent intelligence layer that retains user history, evolving preferences, and long-form knowledge over time.

#### Core Intelligence & Retrieval
* **Embedding & Reranking:** Powered by **Voyage AI**, utilizing advanced rerankers and metadata filtering to maximize retrieval precision.
* **Vector Infrastructure:**  **Qudrant** handles high-dimensional vector storage alongside robust relational metadata.

#### Technical Stack
* **Web Framework:** [ElysiaJS](https://elysiajs.com/) — The high-performance, Bun-native framework for the backend.
* **Identity & DB:** [Supabase](https://supabase.com/) — Unified Auth and PostgreSQL backend.
* **Frontend:** [React](https://react.dev/) — A minimalist, streaming-responsive interface optimized for real-time AI interactions.
* **Worker(BullMQ + Redis):** — Persistent workers. Heavy I/O and compute offloaded. Scalability by design. Powered by BullMQ and Redis."