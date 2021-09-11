# @vuesion/nuxt-vanilla-extract

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Add seek-oss/vanilla-extract to your nuxt application

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@vuesion/nuxt-vanilla-extract` dependency to your project

```bash
yarn add @vuesion/nuxt-vanilla-extract # or npm install @vuesion/nuxt-vanilla-extract
```

2. Add `@vuesion/nuxt-vanilla-extract` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    '@vuesion/nuxt-vanilla-extract',
  ]
}
```

3. Create `*.css.ts` file

```js
import { style } from '@vanilla-extract/css'

export const className = style({
  color: 'red',
  fontFamily: 'sans-serif',
  fontWeight: 600,
})
```

4. Import and use `*.css.ts` file

```js
<template>
  <div :class="className">Foo Bar</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { className } from './VueBadge.css';

export default defineComponent({
  name: 'MyComponent',
  setup() {
    return {
      className,
    };
  },
});
</script>
```


## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Johannes Werner

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-vanilla-extract/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-vanilla-extract

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-vanilla-extract.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-vanilla-extract

[github-actions-ci-src]: https://github.com/vuesion/nuxt-vanilla-extract/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/vuesion/nuxt-vanilla-extract/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/vuesion/nuxt-vanilla-extract.svg
[codecov-href]: https://codecov.io/gh/vuesion/nuxt-vanilla-extract

[license-src]: https://img.shields.io/npm/l/nuxt-vanilla-extract.svg
[license-href]: https://npmjs.com/package/nuxt-vanilla-extract
