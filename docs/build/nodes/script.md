---
title: Script Node
description: Execute custom code for complex transformations.
---

The Script node runs custom code (JavaScript, TypeScript, or Python) when declarative operations are insufficient.

## Purpose

- Implement bespoke logic or calculations.
- Transform data into a custom output shape.

## Configuration

Typical fields include:

- `language`: `javascript | typescript | python`
- `code`: the script body
- `inputs`: named arguments (templated from state)

```json
{
  "type": "script",
  "config": {
    "language": "javascript",
    "code": "return { total: arg1 + arg2 };",
    "inputs": {
      "arg1": { "type": "number", "value": "{{flow.countA}}" },
      "arg2": { "type": "number", "value": "{{flow.countB}}" }
    }
  }
}
```

## Outputs

Script nodes typically return a `json` payload that can be mapped with `variableUpdates`.

## Things to keep in mind

- Script node support is **beta** and may depend on runtime availability.
- Avoid accessing state directly inside the script; pass values through `inputs`.
- Keep scripts deterministic and side-effect free.

