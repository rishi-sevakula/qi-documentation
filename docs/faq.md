---
title: FAQ
description: Frequently asked questions for agent developers.
---

## Can I reuse workflows?

Yes. Use the **Workflow** node to invoke an existing workflow as a nested step.

## How do I pass data between nodes?

Use output variables from upstream nodes and reference them as `{{variableName}}`.

## Why do I need two tokens?

Design-time and runtime APIs are separated for security and operational reasons.

## Are all nodes available in every environment?

Not always. Some nodes are hidden or beta depending on environment configuration.

