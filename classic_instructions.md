# Setup Instructions

## Step *

Copy the `classic` folder from the root repository.

----------------------------------------------------------------

## Step *

Revise: `docusaurus.config.js`

```js
const config = {
    title: 'Lox Lava'
}
```

----------------------------------------------------------------

## Step *

Revise: `docusaurus.config.js`

```js
const config = {
    tagline: 'Psakecin Maroin Tvin Choban Karoin'
}
```

-----------------------------------------------------------------

## Step *

Revise: `docusaurus.config.js`

```js
const config = {
    url: 'https://lox-lava.com'
}
```

-----------------------------------------------------------------

## Step *

Revise: `static/img/favicon.ico`.

-----------------------------------------------------------------

## Step

Revise: `docusaurus.config.js`

```js
const config = {
    organizationName: 'Ruben-Arushanyan'
}
```

-----------------------------------------------------------------

## Step *

Revise: `docusaurus.config.js`

```js
const config = {
    projectName: 'lox-lava'
}
```

-----------------------------------------------------------------

## Step *

Revise: `docusaurus.config.js`

```js
{
    docs: {
        editUrl: 'https://github.com/Ruben-Arushanyan/lox-lava/edit/master/website/'
    }
}
```

-----------------------------------------------------------------

## Step *

Revise: `docusaurus.config.js`

Open this field if you want to disable the blog feature.

```js
{
    // blog: false,
}
```

------------------------------------------------------------------

## Step

Revise: `docusaurus.config.js`

```js
{
    navbar: {
        title: 'Lox Lava'
    }
}
```

------------------------------------------------------------------

## Step

Revise: `static/img/logo.svg`

------------------------------------------------------------------

## Step

Revise: `docusaurus.config.js`

```js
{
    navbar: {
        logo: {
            alt: 'Lox Lava Logo',
            src: 'img/logo.svg',
        }
    }
}
```

-----------------------------------------------------------------

## Step

Revise: `docusaurus.config.js`

```js
{
    navbar: {
        items: [
            // left
            {
                type: 'doc',
                docId: 'intro',
                position: 'left',
                label: 'Tutorial',
            },
            // blog: false,
            {
                to: '/blog',
                label: 'Blog',
                position: 'left',
            },

            // right
            {
                href: 'https://github.com/Ruben-Arushanyan/lox-lava',
                label: 'GitHub',
                position: 'right',
            },
        ]
    }
}
```

--------------------------------------------------------------

## Step

Revise: `docusaurus.config.js`

```js
{
    footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/RubenArushanyan',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Ruben-Arushanyan/lox-lava',
              },
            ],
          },
        ],
    }
}
```

--------------------------------------------------------------

## Step

Revise: `docusaurus.config.js`

```js
{
    footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Ruben Arushanyan`,
    }
}
```

---------------------------------------------------------------

## Step

Revise: `package.json`

```json
{
  "name": "lox-lava-website",
}
```

## Step

Revise: `package.json`

```json
{
    "version": "0.0.1",
}
```

## Step

Revise: `package.json`

```json
{
    "_boilerplateVersion": "0.0.1",
}
```