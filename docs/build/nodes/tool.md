---
title: Tool Node
description: Execute a single tool as a first-class node.
---

The Tool node runs a single tool definition (MCP, handoff, custom) as a standalone node.

## Purpose

- Call a tool without involving an agent.
- Isolate tool execution and capture results in state.
- Use as a building block for deterministic flows.

## Configuration

The Tool node requires a `toolDefinition` in `config`.

Key fields:

- `id`, `name`, `description`
- `config.type`: `mcp | api | code | custom | handoff`
- `config.settings`: provider configuration (e.g., MCP server id)
- `config.parameters`: tool inputs (can be templated)
- `config.schema`: JSON schema describing parameters

```json
{
  "type": "tool",
  "config": {
    "toolDefinition": {
      "id": "search_kb",
      "name": "Search KB",
      "description": "Search knowledge base",
      "config": {
        "type": "mcp",
        "settings": { "serverId": "kb-server" },
        "parameters": {
          "query": { "auto": false, "value": { "type": "string", "value": "{{flow.query}}" } }
        },
        "schema": {
          "type": "object",
          "properties": { "query": { "type": "string" } },
          "required": ["query"]
        }
      }
    }
  }
}
```

## Outputs

Tool nodes return:

- `ok`: success flag
- `toolId`, `toolName`, `toolType`
- `result`: tool output when successful
- `error`: error details when failed
- `meta`: tool-specific metadata

## Things to keep in mind

- Tool nodes **do not** append messages to threads.
- Handoff tools can return a LangGraph Command and redirect execution.
- MCP tools require a valid `serverId` and accessible MCP server configuration.

