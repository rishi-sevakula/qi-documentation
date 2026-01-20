---
title: Authentication Tokens
description: Design-time and runtime token usage.
---

GEP Qi Studio uses two token types:

- **Design-time token**: used for agent management and configuration APIs.
- **Runtime token**: used for workflow execution and streaming APIs.

Tokens are stored locally in the browser. When tokens expire, the platform prompts for updates and reloads the app after saving.

