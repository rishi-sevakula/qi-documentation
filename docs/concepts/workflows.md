---
title: Workflows
description: How workflows are modeled and executed.
---

Workflows define how an agent runs from start to finish. A workflow is a directed graph of nodes (steps) and edges (connections).

## Core structure

- **Start node**: entry point and input binding.
- **Processing nodes**: LLMs, tools, scripts, rules, or nested workflows.
- **Output node**: final result or response payload.

## Graph behavior

- Edges determine execution order.
- Rules and guardrails add conditional branching.
- Nested workflows allow reuse and composition.

## Execution lifecycle

1. Build the workflow in the design-time UI.
2. Compile and store the workflow for runtime execution.
3. Execute the graph with inputs and receive streamed results.

