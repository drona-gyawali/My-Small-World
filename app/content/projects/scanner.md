Secret Scanner is an advanced security toolkit designed to detect hardcoded secrets like API keys, tokens, and credentials in your source code. It combines a powerful C++ scanning engine (`scanner-core`) with a user-friendly **Visual Studio Code extension** (`scanner-extension`) to provide both CLI and GUI interfaces.

---

## Why Two Parts?

- **`scanner-core`** is written in C++ for performance. It can be used independently in CI/CD, Docker, or custom tooling.
- **`scanner-extension`** is a VSCode extension that uses the core scanner as a backend. It gives developers a seamless in-editor experience.

## Features

- Detect common secret patterns (AWS keys, tokens, credentials, etc.)
- Scan files, folders, or entire workspaces
- Inline results with severity levels
- CLI + VS Code support
- Auto scan on save (optional)
- Lightweight, fast C++ core
