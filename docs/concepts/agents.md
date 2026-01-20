---
title: Agents
description: Understand the agent types in GEP Qi Studio.
---

GEP Qi Studio supports two primary agent experiences for developers:

## Workflow agents (agent orchestrations)

Workflow agents are visual, node-based graphs you build on the canvas. They are ideal for:

- Multi-step reasoning and orchestration
- Tool calling and guardrails
- Conditional logic and branching
- Streaming outputs and HITL checkpoints

## Quantum agents

Quantum agents focus on direct LLM interactions with tools and instructions. They are typically used when you want a simpler agent definition without a full workflow graph.

## When to use which

- Use **workflow agents** for complex orchestration, multi-step pipelines, or approvals.
- Use **quantum agents** for conversational or instruction-driven behavior that does not require a full graph.

