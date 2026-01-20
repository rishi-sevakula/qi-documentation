---
title: Output Node
description: Finalize a workflow and shape the response payload.
---

The Output node ends the workflow and constructs the final response payload.

## Purpose

- Terminate workflow execution.
- Map internal state to a clean response object.
- Optionally format or aggregate results.

## Configuration

Primary field:

- `outputMapping`: object of keys to typed values or templates

The runtime expects typed values when outputMapping is produced by the schema converter:

```json
{
  "type": "output",
  "config": {
    "outputMapping": {
      "message": { "type": "string", "value": "{{flow.responseText}}" },
      "confidence": { "type": "number", "value": "{{flow.confidence}}" },
      "metadata": {
        "source": { "type": "string", "value": "llm" }
      }
    }
  }
}
```

## Outputs

The node emits:

- `output`: final response object
- `nodeId`, `nodeType`

## End alias

`type: end` is treated the same as `type: output` in the runtime.

## Things to keep in mind

- Output nodes do not allow outgoing edges.
- Use `outputMapping` to ensure a stable API contract for callers.
- Template values that do not resolve fall back to literal values.

