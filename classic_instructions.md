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

## Step *

Revise: `static/CNAME`.

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
const config = {
    customFields: {
        description: 'Descrtiption for meta tag',
    }
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

-----------------------------------------------------------------

## Step *

Revise: `docusaurus.config.js`

Skip if the blog feature is disabled

```js
{
    blog: {
        blogDescription: 'Lox Lava Blog',
    },
}
```

## Step *

Revise: `docusaurus.config.js`

Skip if the blog feature is disabled

```js
{
    blog: {
        editUrl: 'https://github.com/Ruben-Arushanyan/lox-lava/edit/master/website/',
    },
}
```

------------------------------------------------------------------

## Step *

Revise: `docusaurus.config.js`

```js
{
    navbar: {
        title: 'Lox Lava'
    }
}
```

------------------------------------------------------------------

## Step *

Revise: `static/img/logo.svg`

------------------------------------------------------------------

## Step *

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

## Step *

Revise: `docusaurus.config.js`

```js
{
    navbar: {
        items: [
            ...
        ]
    }
}
```

--------------------------------------------------------------

## Step *

Revise: `docusaurus.config.js`

```js
{
    footer: {
        links: [
            ...
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
        copyright: `Copyright © ${new Date().getFullYear()} Ruben Arushanyan`,
    }
}
```

---------------------------------------------------------------

## Step *

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
    "_boilerplateVersion": "x.x.x",
}
```

## Step

Revise: `src/components/HeroBanner/index.js`

## Step *

Revise: `src/components/HomepageFeatures/index.js`

```js
const FeatureList = [
    ...
];
```

## Step *

Revise: `static/img/easy_to_use.svg`

Delete if not in use․

## Step *

Revise: `docs/`

Remove examples and make real docs.

## Step

Revise: `blog/authors.yml`

Skip if the blog feature is disabled.

## Step *

Revise: `blog/`

Remove examples and make real posts.

## Step

Testing your build locally

```bash
npm run build
npm run serve
```



