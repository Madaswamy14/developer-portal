// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'getting-started',
    'authentication',
    'api-overview',
    {
      type: 'category',
      label: 'Tutorials',
      items: ['tutorials/first-api-call'],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: ['release-notes/v1.0'],
    },
    'faq',
  ],
};

module.exports = sidebars;