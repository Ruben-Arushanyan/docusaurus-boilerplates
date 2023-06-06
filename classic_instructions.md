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
    url: 'https://ruben-arushanyan.github.io',
}
```

## Step

Revise: `docusaurus.config.js`

```js
const config = {
    baseUrl: '/lox-lava/',
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

Revise: `static/manifest.json`

- `"name": "Lox Lava"`
- `"short_name": "Lox Lava"`

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


# Creating a logo (optional)

## Step

Create a logo.  
Helpful platforms and tools
- https://www.pinterest.com/
- https://www.photopea.com/ (Image->Vectorize Bitmap)
- https://www.remove.bg

## Step

Create logo images (https://www.photopea.com)
- `static/images/1200x1200.png`
- `static/images/1200x630.png`
- `static/images/300x300.png`



## Step

Create `static/images/favicon.ico` (<https://iconifier.net>)


## Step

Add PWA

- Generate manifest <https://tools.crawlink.com/tools/pwa-icon-generator>
- Move generated icons to `static/images/icons`
- Revise: `manifest.json` icons array

## Step

In repository Settings page Edit Social preview


# Custom Domain (optional)

## Step

- Rename `static/__CNAME__` to `static/CNAME`
- Revise: `static/CNAME`


## Step

Revise: `docusaurus.config.js`

```js
const config = {
    url: 'https://lox-lava.com'
}
```

## Step

Revise: `docusaurus.config.js`

```js
const config = {
    baseUrl: '/',
}
```

## Step

Revise: Reopo root `package.json`

```json
  "homepage": "https://ruben-arushanyan.github.io/lox-lava",
```

## Step

Revise: Reopo root `README.md` docs links

## Step

Revise: Github repository details website link

## Step

New Release


## Step

Open Pull Request: <https://github.com/js-org/js.org#step-4>

## Step

Remove `js.org` forked repo after Pull Request merged


# Homepage Features (optional)


## Step

`src/pages.index.js`

Open comment `{/* <HomepageFeatures /> */}`
## Step

Revise: `src/components/HomepageFeatures/index.js`

```js
const FeatureList = [
    ...
];
```
