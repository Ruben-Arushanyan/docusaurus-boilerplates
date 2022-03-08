const path = require('path')

const sidebarPath = path.resolve(__dirname, '../sidebars')
const customCssPath = path.resolve(__dirname, '../../src/css/custom.css')


const preset_classic = [
    'classic',
    {
      docs: {
        sidebarPath,
        // Please change this to your repo.
        editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
      blog: {
        showReadingTime: true,
        // Please change this to your repo.
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
      theme: {
        customCss: customCssPath,
      },
    },
]

module.exports = preset_classic