# Setup Instructions

## Step 1

Copy the `classic` folder from the root repository.

----------------------------------------------------------------

## Step 2

Revise: `docusaurus.config.js`

```js
const config = {
    title: 'Lox Lava'
}
```

----------------------------------------------------------------

## Step 3

Revise: `docusaurus.config.js`

```js
const config = {
    tagline: 'Psakecin Maroin Tvin Choban Karoin'
}
```

-----------------------------------------------------------------

## Step 4

Revise: `docusaurus.config.js`

```js
const config = {
    url: 'https://lox-lava.com'
}
```

-----------------------------------------------------------------

## Step 5

Revise: `static/img/favicon.ico`.

-----------------------------------------------------------------

## Step 6

Revise: `docusaurus.config.js`

```js
const config = {
    organizationName: 'Ruben-Arushanyan'
}
```

-----------------------------------------------------------------

## Step 7

Revise: `docusaurus.config.js`

```js
const config = {
    projectName: 'lox-lava'
}
```

-----------------------------------------------------------------

## Step 8

Revise: `docusaurus.config.js`

```js
{
    docs: {
        editUrl: 'https://github.com/Ruben-Arushanyan/lox-lava/edit/master/website/'
    }
}
```

-----------------------------------------------------------------

## Step 9

Revise: `docusaurus.config.js`

```js
{
    blog: {
        editUrl: 'https://github.com/Ruben-Arushanyan/lox-lava/edit/master/website/'
    }
}
```

------------------------------------------------------------------

## Step 10

Revise: `docusaurus.config.js`

```js
{
    navbar: {
        title: 'Lox Lava'
    }
}
```

------------------------------------------------------------------

## Step 11

Revise: `static/img/logo.svg`

------------------------------------------------------------------

## Step 12

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

## Step 13

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

## Step 14

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

## Step 15

Revise: `docusaurus.config.js`

```js
{
    footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Ruben Arushanyan`,
    }
}
```

---------------------------------------------------------------

## Step 16

Revise: `package.json`

```json
{
  "name": "lox-lava-website",
}
```