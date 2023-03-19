## Installation guide for the @unocss/preset-rem-to-px package in Nuxt 3

Follow this installation guide to install and configure the @unocss/preset-rem-to-px package in Nuxt 3:

Step 1. Install @unocss/preset-rem-to-px

```bash
npm i -D @unocss/preset-rem-to-px
```

Step 2. Add the following references in the _**nuxt.config.ts**_ file:

```ts
...
import presetUno from "@unocss/preset-uno";
import presetRemToPx from "@unocss/preset-rem-to-px";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
...
```

Step 3. Add the _**unocss config**_ in the _**nuxt.config.ts**_ file this way:

```ts
export default defineNuxtConfig({
	...
	unocss: {
		presets: [
			presetUno(),
			presetAttributify(),
			presetIcons(),
			presetRemToPx(),
		],
		shortcuts: [],
		rules: [],
	},
    ...
});
```

---

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
