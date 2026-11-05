# Vue + Storybook

A Vue 3 starter project using the Composition API and Vite, with Storybook integrated for developing and documenting components in isolation.

The app's home page displays a reusable `Welcome` component built with `<script setup>`. The same component is available in Storybook, including editable title and description controls and automatically generated documentation.

## Requirements

- Node.js 20.19+ (20.x), or 22.12+; a current LTS release is recommended.
- npm

## Getting Started

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Storybook

Run Storybook in a separate terminal:

```sh
npm run storybook
```

Open http://localhost:16006 and select **Components / Welcome**. The stories include the default home page, a custom welcome message, and a mobile viewport. Change the `title` and `description` controls to preview different content.

Port 16006 avoids conflicts with other local Storybook projects. To use a different port, run `npm run storybook -- --port 16007`. If a story reports "Failed to fetch dynamically imported module", confirm you are using the URL printed by this project's server rather than a tab connected to an older instance.

Storybook imports the same global stylesheet as the app and serves the same public assets, keeping component previews consistent with the home page.

## Production Builds

```sh
npm run build
npm run preview
```

The Vue app is built into `dist/`. The preview command serves that build locally.

```sh
npm run build-storybook
```

The static component documentation is built into `storybook-static/`. Deploy this separately from the app to any static hosting service.

## Project Structure

```text
.storybook/
  main.js                 Storybook's Vue/Vite integration and story discovery
  preview.js              Shared styles and preview settings
public/
  vue.png                 Vue logo
src/
  components/
    Welcome/
      Welcome.vue         Composition API welcome component
      Welcome.stories.js  Welcome stories and controls
    PostComponent/
      PostComponent.vue          Image and linked headline
      PostComponent.stories.js   Post stories and controls
  App.vue                 App home page
  main.js                 Vue entry point
  style.css               Shared responsive styles
vite.config.js            Vue plugin configuration
```

## Developing Components

Give each component its own folder under `src/components/`, using `<script setup>` for Composition API logic. Place a `ComponentName.stories.js` file beside the component in that folder; Storybook discovers these files automatically. Import components into `App.vue` to display them in the application.

This starter uses JavaScript. TypeScript is installed as a peer dependency of Storybook's Vue integration; converting the app to TypeScript is not required.

The interface uses Lucide icons and Google Fonts (DM Sans and Manrope). Fonts fall back to sans-serif when offline. The Vue logo is from the official [Vue artwork repository](https://github.com/vuejs/art).