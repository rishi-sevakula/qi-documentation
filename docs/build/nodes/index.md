---
title: Nodes Overview
description: Understand node roles, data flow, and configuration basics.
---

Nodes are the building blocks of an agentic workflow. Each node has a type, configuration, and optional state updates. This section explains the common schema and then dives into each node type in detail.

## What a node contains

Every node shares a common shape. The `config` field is type-specific, and the rest is consistent across the workflow.

```json
{
  "id": "string",
  "type": "start | llm | agent | tool | api | rule | guardrail | variable | script | iterator | parallel | workflow | output",
  "name": "string",
  "description": "string",
  "config": { "typeSpecific": "..." },
  "variableUpdates": [
    {
      "fieldName": "flow.someVar",
      "operation": "set | merge | append | extend | prepend | increment | decrement | clear",
      "value": "any",
      "condition": "{{optional.condition}}",
      "transform": { "type": "uppercase | lowercase | trim | json_parse | json_stringify | extract_field | format_date | custom" },
      "role": "user | assistant | system | tool"
    }
  ]
}
```

### What to keep in mind

- **Config is per node type.** The fields inside `config` are validated by the runtime for that node type.
- **`variableUpdates` run after node execution.** Use them to move node outputs into `flow.*`, `system.*`, `threads.*`, or `nodes.*`.
- **Template resolution is supported.** Most fields accept `{{}}` templates that resolve against state at runtime.

## Data and state namespaces

Node configs and variable updates commonly reference:

- `flow.*` for workflow state
- `system.*` for runtime metadata
- `threads.*` for conversation threads
- `nodes.*` for node outputs (`nodes.<nodeId>.<field>`)

## Routing and edges

Edges connect nodes. Some nodes produce **dynamic outputs** that change routing:

- **Rule nodes** route by `ruleId` (source handles use `ruleId` values and `r-else`).
- **API and Guardrail nodes** typically use `pass` / `fail` outputs.

## Runtime availability notes

The UI exposes some nodes that are still marked **beta** or **not yet implemented** in the runtime. The current engine supports these core types at runtime:

- `start`, `llm`, `agent`, `tool`, `api`, `rule`, `workflow`, `output` (and `end` as an alias of `output`)

Nodes like `variable`, `script`, `iterator`, and `parallel` are present in the UI but may require additional runtime support depending on your deployment. Each node page calls this out explicitly.

