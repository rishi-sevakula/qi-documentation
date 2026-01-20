---
title: HTTP Request Node
description: Perform HTTP calls and route on success or failure.
---

The HTTP Request node (`type: api`) makes a direct HTTP call and exposes success/failure routing.

## Purpose

- Call external services via REST.
- Branch workflow on `success` or `fail`.
- Use templates in URL, headers, body, and timeout.

## Configuration

Supported fields:

- `method`: `GET | POST | PUT | PATCH | DELETE | HEAD | OPTIONS`
- `url`: required, supports `{{}}` templates
- `headers`: JSON string, supports templates inside values
- `body`: JSON string (used for POST/PUT/PATCH)
- `timeout`: number (ms) or string template

```json
{
  "type": "api",
  "config": {
    "method": "POST",
    "url": "https://api.example.com/tickets",
    "headers": "{\"Authorization\":\"Bearer {{credentials.support.token}}\"}",
    "body": "{\"title\":\"{{flow.title}}\",\"priority\":\"{{flow.priority}}\"}",
    "timeout": 15000
  }
}
```

## Outputs

The node emits:

- `success`: boolean
- `body`: parsed response body (JSON when applicable)
- `status_code`
- `headers`
- `error` (present on failures)

## Routing

Use `SUCCESS` and `FAIL` handles (pass/fail) in the canvas to branch on `success`.

## Things to keep in mind

- URL must be valid `http` or `https`.
- `headers` and `body` must be valid JSON strings at design time.
- Timeouts are clamped by the runtime (min 1000 ms, max 30000 ms).

