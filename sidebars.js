/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    'intro',
    'quick-start',
    'commands-and-workflow',
    {
      type: 'category',
      label: '基础配置',
      items: [
        'item-structure',
        'display-and-options',
        'templates-and-extend',
        'values-and-computed',
        'expressions-and-text',
        'context-variables',
        'modules'
      ]
    },
    {
      type: 'category',
      label: '触发与动作',
      items: [
        'triggers',
        'trigger-quick-reference',
        'interceptors',
        'interceptor-quick-reference',
        'interceptor-patterns',
        'actions',
        'action-quick-reference',
        'complex-actions',
        'stability-and-limits'
      ]
    },
    'patterns',
    'full-examples',
    'action-edge-cases',
    'pitfalls'
  ]
};

module.exports = sidebars;
