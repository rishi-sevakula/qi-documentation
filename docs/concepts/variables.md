---
title: Variables
description: How data flows through workflows.
---

Variables are the primary way data moves between nodes.

## Variable syntax

Use double curly braces to reference variables:

```
{{variableName}}
```

## Variable scope

- **Flow variables**: scoped to a workflow execution.
- **System variables**: globally available and managed by the platform.

## Best practices

- Use descriptive names to avoid collisions.
- Check node outputs to understand what variables are produced.
- Validate variables in guardrails or rules before using them in critical logic.

