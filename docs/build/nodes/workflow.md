---
title: Workflow Node
description: Execute another workflow as a sub-graph.
---

The Workflow node runs a child workflow with its own isolated state and returns the child output back to the parent.

## Purpose

- Reuse complex flows as a single node.
- Encapsulate sub-logic and keep the parent workflow clean.
- Support interrupts from the child workflow.

## Configuration

Key fields:

- `agenticWorkflowId`: id of the child workflow
- `agenticWorkflowIdMode`: `static` or `dynamic`
- `version`: optional version (dynamic mode supports templating)
- `inputs`: mapping of parent state to child inputs
- `childWorkflowSchema`: attached by the runtime when using static mode

```json
{
  "type": "workflow",
  "config": {
    "agenticWorkflowId": "customer-support-flow",
    "inputs": {
      "query": "{{flow.customerQuery}}",
      "sessionId": "{{system.sessionId}}"
    }
  }
}
```

## Outputs

The node returns:

- `childGraphId`, `childSessionId`
/- Child `output` payload (from the child Output node)
- `variables`: the child workflow state snapshot
- Interrupt metadata when a child workflow pauses for input

## Interrupts and resume

If the child workflow interrupts (e.g., HITL), the parent Workflow node also interrupts. The interrupt metadata includes the child checkpoint id and session id required to resume execution.

## Things to keep in mind

- In **dynamic mode**, the runtime needs `configurable.workflowSchemaLoader` to load the child schema at runtime.
- Inputs are resolved against the parent state at runtime; keep them explicit and minimal.
- The child output is taken from the child Output node after id transformation at compile time.

