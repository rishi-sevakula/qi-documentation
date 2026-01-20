---
title: Nodes
description: Node types available in the workflow canvas.
---

Nodes are the building blocks of workflows. Each node performs a specific function and can emit output variables for downstream nodes.

## Common node types

- **Start**: initializes workflow input.
- **LLM**: runs a large language model prompt.
- **Agent**: invokes another agent workflow.
- **HTTP Request**: calls external APIs.
- **Tool**: invokes a configured tool integration.
- **Guardrail**: safety or validation checks.
- **Rule**: conditional routing.
- **Workflow**: nested workflow execution.
- **Script**: custom script execution.
- **Variable**: set or transform variables.
- **Iterator**: loop over data sets.
- **Parallel**: run multiple branches simultaneously.
- **Output**: finalize and return results.

Some node types may be hidden or marked beta based on your environment.

## Output variables

Each node declares output variables you can reference using `{{variableName}}` in downstream nodes.

