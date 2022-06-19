# Setup Instructions

## Step

Copy the `classic` folder from the root repository.

## Step

`docusaurus.config.js`

Add: `routeBasePath`

```js
docs: {
    routeBasePath: '/',
}
```

## Step

Remove: `pages/index.js`

## Step

Rename: `docs/intro.md` to `docs/intro.mdx`

## Step

`docs/intro.mdx`

Add: 

```
---
slug: /
---
```

## Step

`docs/intro.mdx`

Add:

```jsx
import AdditonalInfoLog from '@site/src/components/AdditonalInfoLog';

<AdditonalInfoLog />

```

