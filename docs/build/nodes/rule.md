---
title: Rule Node
description: Route execution based on conditional logic.
---

The Rule node evaluates conditions and routes execution to the first matching rule.

## Purpose

- Express conditional logic without code.
- Route to different branches based on state.
- Provide a default fallback route.

## Configuration

Rules are evaluated in order. The first rule that matches wins.

```json
{
  "type": "rule",
  "config": {
    "rules": [
      {
        "ruleId": "r-high-priority",
        "enable": true,
        "logicType": "AND",
        "conditions": [
          { "field": "{{flow.priority}}", "operator": ">=", "value": 8 },
          { "field": "{{flow.status}}", "operator": "is", "value": "open" }
        ]
      },
      {
        "ruleId": "r-default",
        "enable": true,
        "logicType": "default",
        "conditions": []
      }
    ]
  }
}
```

### Operators

Supported operators include:

- String: `contains`, `not contains`, `is`, `is not`, `starts with`, `ends with`, `is empty`, `is not empty`
- Number: `=`, `!=`, `<`, `>`, `<=`, `>=`, `is empty`, `is not empty`
- Array: `contains`, `not contains`, `is empty`, `is not empty`, `starts with`, `ends with`
- Object: `is empty`, `is not empty`
- Boolean: `is`, `is not`, `=`, `!=`

## Outputs

The Rule node emits:

- `matchedRule`: rule id (or `r-else`)
- `ruleResult`: boolean
- `evaluationDetails`: optional diagnostics

## Routing

Edges should use the rule id in their source handle:

- `sourceHandle = ruleId` for matched rules
- `sourceHandle = r-else` for the default path

## Things to keep in mind

- Rule order matters. Place the most specific rules first.
- Use explicit namespaces (`flow.*`, `system.*`, `nodes.*`) to avoid ambiguity.
- `logicType: default` should be the last rule.

