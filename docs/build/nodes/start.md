---
title: Start Node
description: Entry point for workflow execution and input validation.
---

The Start node is the entry point for every workflow. It validates incoming inputs and signals that the workflow has begun.

## Purpose

- Accepts runtime input (`interface.inputs`) and validates it.
- Does not mutate state directly.
- Emits a simple marker payload for downstream nodes to reference if needed.

## When to use

- Always include exactly one Start node at the top of a workflow.
- Use it to define which inputs are required and how they should be validated.

## Configuration

The Start node supports lightweight validation in `config`:

- `requiredInputs`: array of input field names that must be present.
- `allowedInputs`: array of input field names that are allowed (unexpected fields are logged as warnings).
- `inputValidation`: map of field names to validation rules (type, minLength, maxLength, pattern, enum).

```json
{
  "type": "start",
  "config": {
    "requiredInputs": ["query", "customerId"],
    "allowedInputs": ["query", "customerId", "locale"],
    "inputValidation": {
      "query": { "type": "string", "minLength": 1, "maxLength": 1000 },
      "customerId": { "type": "string", "pattern": "^[A-Z0-9]+$" }
    }
  }
}
```

## Outputs

The Start node emits a minimal payload into `nodes.<startNodeId>`:

- `marker`: `"START"`
- `interface.inputs`: the raw input object
- `timestamp`, `nodeId`, `nodeType`

## Things to keep in mind

- Start does **not** update `flow.*` automatically. Use `variableUpdates` or a Variable node to copy inputs into state.
- Validation errors stop execution early, so keep rules aligned with your UI and API payloads.
- The Start node should not have incoming edges (see validation rules).

