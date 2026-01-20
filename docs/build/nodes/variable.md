---
title: Variable Node
description: Declaratively update workflow state without code.
---

The Variable node performs state mutations through a list of operations. It is useful for simple transformations and bookkeeping.

## Purpose

- Update `flow.*`, `threads.*`, or `nodes.*` variables without scripts.
- Perform common operations such as set, merge, append, or clear.

## Configuration

The UI represents variable operations as a list in `config.operations`:

```json
{
  "type": "variable",
  "config": {
    "operations": [
      { "fieldName": "flow.count", "operation": "increment", "value": 1 },
      { "fieldName": "flow.tags", "operation": "append", "value": "priority" },
      { "fieldName": "threads.main", "operation": "append", "role": "assistant", "value": "Hello!" }
    ]
  }
}
```

Supported operations include:

- `set`, `merge`, `append`, `extend`, `prepend`, `increment`, `decrement`, `clear`

## Outputs

Variable nodes do not produce outputs. They are used only for state mutation.

## Things to keep in mind

- Variable node support is **beta** and may depend on runtime availability.
- Thread operations (`threads.*`) should include a `role` when appending messages.
- Prefer explicit field names with namespaces (`flow.*`, `threads.*`) to avoid ambiguity.

