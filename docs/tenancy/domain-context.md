---
title: Domain Context
description: Select client, domain, environment, app, and module.
---

All API calls in GEP Qi Studio depend on a domain context. Without it, the platform blocks execution and configuration.

## Required selections

- **Client**
- **Domain (BPC code)**
- **Environment**
- **App**
- **Module**

## How it is set

- If a compact domain config is present in the URL, the platform hydrates it automatically.
- If not, a forced modal prompts you to select the required context before proceeding.

This ensures every agent and tool configuration is scoped correctly.

