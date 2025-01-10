# @unpolyfill/vite-plugin

Vite plugin to unpolyfill your code and reduce bundle size


## Installation

```bash
npm install --save-dev @unpolyfill/vite-plugin
```

## Configuration

```js
import { defineConfig } from 'vite';
import unpolyfill from 'vite-plugin';

export default defineConfig({
  plugins: [unpolyfill()],
});
```
