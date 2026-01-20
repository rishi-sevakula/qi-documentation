import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  guideSidebar: [
    'index',
    'getting-started',
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'concepts/agents',
        'concepts/workflows',
        'concepts/nodes',
        'concepts/variables',
        'concepts/execution',
      ],
    },
    {
      type: 'category',
      label: 'Build Agents',
      items: [
        'build/create-agent',
        'build/canvas',
        'build/validation',
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      items: [
        'build/nodes/index',
        'build/nodes/start',
        'build/nodes/llm',
        'build/nodes/agent',
        'build/nodes/tool',
        'build/nodes/api',
        'build/nodes/guardrail',
        'build/nodes/rule',
        'build/nodes/variable',
        'build/nodes/script',
        'build/nodes/iterator',
        'build/nodes/parallel',
        'build/nodes/workflow',
        'build/nodes/output',
      ],
    },
    {
      type: 'category',
      label: 'Tools & Integrations',
      items: [
        'tools/overview',
        'tools/mcp',
        'tools/system-tools',
      ],
    },
    {
      type: 'category',
      label: 'Run & Observe',
      items: [
        'run/execution',
        'run/streaming',
        'run/hitl',
      ],
    },
    {
      type: 'category',
      label: 'Tenancy & Environments',
      items: [
        'tenancy/domain-context',
        'tenancy/environments',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: ['security/auth-tokens'],
    },
    'troubleshooting',
    'faq',
    'glossary',
  ],
};

export default sidebars;
