/** @type {import('@storybook/vue3-vite').StorybookConfig} */
const config = {
  stories: ['../src/**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/vue3-vite',
  staticDirs: ['../public'],
}

export default config