---
title: Execution
description: How workflows run in the runtime engine.
---

Execution turns your workflow definition into a live run that processes inputs and produces outputs.

## Design-time vs runtime

- **Design-time**: create and update workflows and agent definitions.
- **Runtime**: execute compiled workflows, stream events, and handle interrupts.

## Execution signals

During runtime, the platform emits events such as:

- Node start / node end
- Streaming text deltas
- Tool call events
- Workflow completion

These events power the live UI and execution tracking.

