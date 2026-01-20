---
title: LLM Node
description: Call a language model directly with a prompt template.
---

The LLM node runs a single model call. Use it for deterministic generation, classification, or structured extraction.

## Purpose

- Generates text from a prompt template.
- Optionally enforces a structured JSON response schema.
- Does not call tools (use Agent nodes for tool use).

## When to use

- You want a single-step LLM output.
- You do not need multi-step reasoning or tool calls.
- You need predictable output and lower latency than agent loops.

## Configuration

### Model

The model object follows `ModelConfig` and supports provider-specific settings:

- `provider`: `openai | anthropic | azureopenai | local`
- `code`: primary model identifier (preferred)
- `name`: display name (fallback)
- `version`: optional version label
- `credentialId`: references stored credentials
- `temperature`, `maxTokens`, `topP`, `frequencyPenalty`, `presencePenalty`

### Prompt template

`promptTemplate` is required and must contain at least one message:

```json
{
  "id": "uuid",
  "role": "system | user | assistant | tool",
  "text": "string with {{variable}} references"
}
```

### Structured output (optional)

Use `structuredOutput.enable = true` with a JSON schema to enforce output shape.

## Output

The LLM node returns a fixed payload:

- `text`: the generated text
- `structuredOutput`: present when structured output is enabled
- `nodeId`, `nodeType`

## Example

```json
{
  "type": "llm",
  "config": {
    "model": {
      "provider": "openai",
      "code": "gpt-4.1",
      "temperature": 0.2,
      "maxTokens": 1024
    },
    "promptTemplate": [
      { "id": "sys-1", "role": "system", "text": "You are a concise assistant." },
      { "id": "usr-1", "role": "user", "text": "Summarize {{flow.documentText}}." }
    ],
    "structuredOutput": {
      "enable": true,
      "name": "Summary",
      "description": "Document summary and key points",
      "schema": {
        "type": "object",
        "properties": {
          "summary": { "type": "string" },
          "keyPoints": { "type": "array", "items": { "type": "string" } }
        },
        "required": ["summary"]
      }
    }
  }
}
```

## Things to keep in mind

- `promptTemplate` is required; an empty template fails validation.
- Avoid high temperatures when you need deterministic structured output.
- Streaming can be enabled in config, but downstream nodes still receive the final payload.

