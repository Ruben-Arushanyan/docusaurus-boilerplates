
const navbar = {
    title: 'My Site',
    logo: {
      alt: 'My Site Logo',
      src: 'img/logo.svg',
    },
    items: [
      {
        to: 'docs/introduction',
        position: 'left',
        label: 'Getting Started',
        activeBasePath: 'docs/introduction'
      },
      {
        to: 'docs/concepts',
        position: 'left',
        label: 'Concepts',
        activeBasePath: 'docs/concepts'
      },
      {
        to: 'docs/guide',
        position: 'left',
        label: 'Usage Guide',
        activeBasePath: 'docs/guide'
      },
      {
        to: 'docs/api',
        position: 'left',
        label: 'API',
        activeBasePath: 'docs/api'
      },
      {
        href: 'https://github.com/Redux-Cool/redux-cool',
        label: 'GitHub',
        position: 'right',
      },
    ],
}

module.exports = navbar;