---
title: Getting Started
description: Start using GEP Qi Studio as an agent developer.
---

This guide helps you access GEP Qi Studio, set up your environment context, and create your first agent workflow.

## 1) Access and authentication

GEP Qi Studio uses separate tokens for design-time and runtime APIs:

- **Design-time token**: agent management and configuration.
- **Runtime token**: workflow execution and streaming.

If tokens are missing or expired, the platform prompts for updates via the auth dialog and reloads after save.

## 2) Select your domain context

Before any API calls can work, you must select a domain context:

- Client
- Domain (BPC code)
- Environment
- App
- Module

If the platform detects a valid context in the URL, it hydrates the selection automatically. Otherwise, a forced modal prompts you to configure it before proceeding.

## 3) Create your first agent workflow

1. Open the Agents area.
2. Click **Create** to start a new workflow agent.
3. Use the canvas to add nodes, connect them, and configure properties.
4. Save the workflow and run it with a sample input.

Next: see `build/canvas` for a full walkthrough.

