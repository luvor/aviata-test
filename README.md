## Test task for Aviata
### Implemented
- Соответствие дизайну [+]
- Работа фильтров [-+] (фильтр по опциям тарифа работает только baggageOnly)
- Реализация адаптивной верстки [+]
- Использование оптимальных подходов при написании кода [+]

### P.S.
- Вместо tailwindcss использовал unoCSS, впринципе они взаимозаменяемы, но unoCSS просто удобнее (я использовал так чтобы можно было поменять на tailwindcss)
- Роутер здесь локальный по файлам
- Components auto import

### Launch
```bash
yarn install
yarn dev
```

<br>

<center><img src="https://user-images.githubusercontent.com/86249418/200179080-41665195-6e0f-4a6a-bbd1-6fb461f195de.png" /></center>

<br>

<h2>
Based on Vue template
<a href="https://vitesse-lite.netlify.app/">Vitesse Lite</a>
</h2>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- ✅ Use [Vitest](http://vitest.dev/) for unit and components testing

- 🦾 TypeScript, of course

- ☁️ Deploy on Netlify, zero-config


## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/antfu/vitesse-lite/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit antfu/vitesse-lite my-vitesse-app
cd my-vitesse-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
