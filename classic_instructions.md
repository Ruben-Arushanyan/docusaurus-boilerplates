# Setup Instructions

## Step

Copy the `classic` folder from the root repository.


## Step

Revise: `docusaurus.config.js`

```js
const config = {
    title: 'Lox Lava'
}
```


## Step

Revise: `docusaurus.config.js`

```js
const config = {
    tagline: 'Psakecin Maroin Tvin Choban Karoin'
}
```


## Step

Revise: `docusaurus.config.js`

```js
const config = {
    url: 'https://ruben-arushanyan.github.io/lox-lava'
}
```


## Step

Revise: `docusaurus.config.js`

```js
const config = {
    organizationName: 'Ruben-Arushanyan'
}
```


## Step

Revise: `docusaurus.config.js`

```js
const config = {
    projectName: 'lox-lava'
}
```


## Step

Revise: `docusaurus.config.js`

```js
const config = {
    customFields: {
        description: 'Descrtiption for meta tag',
    }
}
```


## Step

Revise: `docusaurus.config.js`

```js
{
    docs: {
        editUrl: 'https://github.com/Ruben-Arushanyan/lox-lava/edit/master/website/'
    }
}
```


## Step

Revise: `docusaurus.config.js`

Open this field if you want to disable the blog feature.

```js
{
    // blog: false,
}
```


## Step

Revise: `docusaurus.config.js`

Skip if the blog feature is disabled

```js
{
    blog: {
        blogDescription: 'Lox Lava Blog',
    },
}
```

## Step

Revise: `docusaurus.config.js`

Skip if the blog feature is disabled

```js
{
    blog: {
        editUrl: 'https://github.com/Ruben-Arushanyan/lox-lava/edit/master/website/',
    },
}
```

## Step

Revise: `docusaurus.config.js`

```js
    metadata: [
        {
            name: 'keywords',
            content: 'lox, lava, maro, karo',
        },
    ]
```

## Step

Revise: `docusaurus.config.js`

```js
{
    navbar: {
        title: 'Lox Lava'
    }
}
```

## Step

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


## Step

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


## Step

Revise: `docusaurus.config.js`

```js
{
    footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Ruben Arushanyan`,
    }
}
```

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
    "_boilerplateVersion": "x.x.x",
}
```

## Step

Revise: `src/components/HeroBanner/index.js`

## Step

Revise: `src/components/HomepageFeatures/index.js`

```js
const FeatureList = [
    ...
];
```

## Step

Revise: `static/img/easy_to_use.svg`

Delete if not in use․

## Step

Revise: `docs/`

Remove examples and make real docs.

## Step

Revise: `blog/authors.yml`

Skip if the blog feature is disabled.

## Step

Revise: `blog/`

Remove examples and make real posts.

## Step

Testing your build locally

```bash
npm run build
npm run serve
```


# Creating a logo

## Step

Create Logo

- <https://www.fotor.com>
- <https://www.iloveimg.com>
- <https://www.remove.bg>

## Step

Create `favicon.ico` - <https://iconifier.net>

Revise: `static/img/favicon.ico`.

## Step

Create `og:image` **1200x630** image <https://promo.com/tools/image-resizer/>

Revise: `static/img/image-soc.jpeg`.

## Step

Revise: `static/img/logo.svg`

## Step

Add PWA

- Revise: `docusaurus.config.js`

    Open the comment for PWA
    ```js
    {
        plugins: [
            //    [
            //        'pwa',
            //        {
            //            ...
            //        }
            //    ]
        ]
    }
    ```
- Rename `static/__manifest.json__` to `manifest.json`
- Generate manifest json <https://www.simicart.com/manifest-generator.html>
- Move generated icons to `static/img/icons`











# Custom Domain

## Step

## Step

Revise: `docusaurus.config.js`

```js
const config = {
    url: 'https://lox-lava.com'
}
```
Examples:

- `https://ruben-arushanyan.github.io/lox-lava`

## Step

if you want to custom domain for github pages

- Rename `static/__CNAME__` to `static/CNAME`
- Revise: `static/CNAME`


