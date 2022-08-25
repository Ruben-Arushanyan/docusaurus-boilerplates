[1]: /classic_instructions.md

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

Rename: `docs/introduction.md` to `docs/introduction.mdx`

## Step

`docs/introduction.mdx`

Add: 

```
---
slug: /
---
```

## Step

`docs/introduction.mdx`

Add:

```jsx
import AdditonalInfoLog from '@site/src/components/AdditonalInfoLog';

<AdditonalInfoLog />

```


## Step

Go to: [classic_instructions.md][1]
