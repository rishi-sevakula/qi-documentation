---
title: Guardrail Node
description: Validate or sanitize content using guardrail checks.
---

The Guardrail node runs safety or compliance checks on inputs or outputs. It can flag or sanitize content before downstream nodes consume it.

## Purpose

- Run PII, jailbreak, or custom prompt checks.
- Optionally sanitize input text and write it back to state.
- Route to pass/fail branches.

## Configuration

Key fields:

- `input`: string template (e.g., `{{flow.userMessage}}`)
- `checks`: list of checks with `name`, `stage`, and `params`
- `decision.mode`: currently `all_must_pass`
- `model`: used for LLM-based checks (credentials injected at runtime)

```json
{
  "type": "guardrail",
  "config": {
    "input": "{{flow.userMessage}}",
    "checks": [
      {
        "name": "PII",
        "stage": "input",
        "params": { "action": "mask" }
      },
      {
        "name": "Jailbreak",
        "stage": "input",
        "params": {
          "model": { "code": "gpt-4.1", "provider": "openai" }
        }
      }
    ],
    "decision": { "mode": "all_must_pass" }
  }
}
```

## Outputs

The node emits:

- `passed`: boolean
- `sanitizedInput`: string (when a check rewrites input)
- `findings`: list of violations
- `rawGuardrailResults`: raw check responses

## Routing

Guardrail nodes are typically connected with `PASS` and `FAIL` handles.

## Things to keep in mind

- LLM-based checks (e.g., CustomPrompt, Jailbreak) require a model in `params.model`.
- If `sanitizedInput` is returned, the node overwrites the input variable it read from.
- Guardrails require valid credentials injected at runtime, similar to LLM nodes.

