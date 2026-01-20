---
title: Validation and Rules
description: Keep workflows valid and predictable.
---

GEP Qi Studio enforces guardrails to keep workflows valid:

- Start nodes cannot be targets of incoming connections.
- Output nodes do not allow outgoing connections.
- Self-loops are not allowed.

When designing workflows:

- Keep branching rules explicit.
- Place guardrails before output.
- Prefer named outputs for clarity.

