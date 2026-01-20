---
title: Troubleshooting
description: Common issues and fixes.
---

## Domain config modal keeps appearing

- Ensure the URL contains a valid domain config.
- Re-select client/domain/environment/app/module and save.

## Token expired or unauthorized

- Update the design-time and runtime tokens.
- Reload the page after saving tokens.

## Workflow does not run or stalls

- Confirm nodes are connected properly and include an Output node.
- Check for guardrails or rules that prevent progress.
- Verify tool configuration and environment context.

## Streaming not visible

- Ensure streaming is enabled in canvas preferences.
- Re-run the workflow to re-establish the SSE connection.

