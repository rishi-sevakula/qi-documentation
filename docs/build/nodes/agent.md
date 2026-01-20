---
title: Agent Node
description: Run a tool-enabled agent with multi-step reasoning.
---

The Agent node runs an autonomous agent that can call tools and iterate until it produces a final answer.

## Purpose

- Multi-step reasoning (ReAct) with tool calling.
- Structured output when you need a strict response schema.
- Conversation management with per-agent threads.

## When to use

- You need the model to decide which tools to call.
- The task is ambiguous and requires multiple steps.
- You need tool execution history captured in outputs.

## Configuration

### Core fields

- `agentStrategy`: `react` or `function_calling`
- `model`: same structure as the LLM node
- `promptTemplate`: array of messages (system/user/assistant/tool)
- `tools`: list of embedded tool definitions
- `maxIterations`: max tool/LLM steps (1-20)
- `includeThoughts`: include reasoning in output (if supported)

### Embedded tools

Each tool in `tools` includes:

- `name`, `description`
- `config.type`: `mcp | api | code | custom | handoff`
- `config.settings`: provider settings (e.g., MCP server id)
- `config.parameters`: input parameters (auto or static)
- `config.schema`: JSON schema for tool parameters
- Output controls:
  - `captureRawResponse`: stores raw tool output in state
  - `llmProjection`: filters which fields the LLM can see
  - `returnDirect`: interrupts the workflow and returns tool output directly

## Outputs

Agent nodes emit a fixed payload:

- `text`: final response
- `structuredOutput`: when enabled
- `toolCalls`: list of tool invocations
- `toolResults`: captured raw tool outputs (when enabled)
- `threadUpdate`: persisted into `thread.<agentId>_messages`

## Example

```json
{
  "type": "agent",
  "config": {
    "agentStrategy": "react",
    "model": { "provider": "openai", "code": "gpt-4.1" },
    "promptTemplate": [
      { "id": "sys-1", "role": "system", "text": "You are a support agent." },
      { "id": "usr-1", "role": "user", "text": "{{system.userQuery}}" }
    ],
    "tools": [
      {
        "name": "search_kb",
        "description": "Search internal knowledge base",
        "config": {
          "type": "mcp",
          "settings": { "serverId": "kb-server" },
          "schema": {
            "type": "object",
            "properties": { "query": { "type": "string" } },
            "required": ["query"]
          },
          "parameters": {
            "query": { "auto": true, "value": { "type": "string", "value": "" } }
          },
          "captureRawResponse": true
        }
      }
    ],
    "maxIterations": 5
  }
}
```

## Things to keep in mind

- The agent keeps its own thread at `thread.<agentId>_messages`. System prompts are not stored in the thread.
- `returnDirect: true` tools trigger a workflow interrupt and return tool output as the response.
- Keep `maxIterations` low to avoid runaway loops.
- Tools must be validated; invalid schemas or missing settings cause runtime failures.

