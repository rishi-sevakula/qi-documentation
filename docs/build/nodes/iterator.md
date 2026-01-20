---
title: Iterator Node
description: Iterate over collections and run a sub-graph per item.
---

The Iterator node is intended to loop over a list and run a set of nodes for each item.

## Purpose

- Apply a sub-graph to each element in an array.
- Accumulate results back into state.

## Expected configuration (subject to change)

Iterator behavior is currently **beta** and evolving. Typical configuration may include:

- `listPath`: the state path to iterate (e.g., `flow.items`)
- `itemVar`: variable name to expose each item to the loop
- `resultPath`: where to store the collected results
- `concurrency`: optional parallelism limit

## Things to keep in mind

- Runtime support may not be enabled in all deployments.
- Prefer a Workflow node if you need a stable, reusable loop pattern today.
- Be explicit about inputs and outputs to avoid large state growth.

