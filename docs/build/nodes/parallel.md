---
title: Parallel Node
description: Execute branches concurrently and merge results.
---

The Parallel node is intended to run multiple branches at the same time and then aggregate results.

## Purpose

- Reduce latency by running independent tasks concurrently.
- Combine outputs for downstream decision-making.

## Expected configuration (subject to change)

Parallel behavior is currently **beta** and evolving. Typical configuration may include:

- `branches`: list of node ids or sub-graphs to execute
- `joinStrategy`: how to merge results (e.g., merge, collect)
- `timeout`: optional maximum duration

## Things to keep in mind

- Runtime support may not be enabled in all deployments.
- Parallelism can increase load on tool and model quotas.
- Always define clear merge behavior to avoid ambiguous outputs.

