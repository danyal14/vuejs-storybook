<script setup>
import { ArrowUpRight, Blocks, BookOpen, Code2, Zap } from '@lucide/vue'

const vueLogoUrl = `${import.meta.env.BASE_URL}vue.png`

defineProps({
  title: {
    type: String,
    default: 'Vue + Storybook',
  },
  description: {
    type: String,
    default: 'A small beginning for your next big idea. Build with Vue 3, explore with Storybook, and make it your own.',
  },
})

const resources = [
  {
    name: 'Vue 3',
    label: 'THE FOUNDATION',
    description: 'Reactive, approachable, and ready for your ideas. Meet the Composition API.',
    href: 'https://vuejs.org/guide/introduction.html',
    icon: Code2,
    theme: 'vue',
  },
  {
    name: 'Storybook',
    label: 'THE WORKSHOP',
    description: 'Give every component a place to grow. Explore states, props, and possibilities.',
    href: 'https://storybook.js.org/docs/get-started/frameworks/vue3-vite',
    icon: Blocks,
    theme: 'storybook',
  },
  {
    name: 'Vite',
    label: 'THE ENGINE',
    description: 'Keep your feedback loop short with instant updates and fast production builds.',
    href: 'https://vite.dev/guide/',
    icon: Zap,
    theme: 'vite',
  },
]
</script>

<template>
  <div class="welcome">
    <header class="site-header">
      <a class="wordmark" href="#main" aria-label="Vue and Storybook home">
        <img :src="vueLogoUrl" alt="" width="28" height="25" />
        <span>vue / storybook</span>
      </a>
      <span class="project-label"><span class="status-dot"></span> YOUR NEXT CHAPTER</span>
    </header>

    <main id="main">
      <section class="intro" aria-labelledby="welcome-title">
        <div class="intro-mark" aria-hidden="true">
          <img :src="vueLogoUrl" alt="" width="82" height="72" />
          <span class="plus">+</span>
          <BookOpen class="book-mark" :size="64" :stroke-width="1.5" />
        </div>
        <p class="eyebrow">A FRESH START</p>
        <h1 id="welcome-title">{{ title }}</h1>
        <p class="intro-description">{{ description }}</p>
        <a class="primary-link" href="https://vuejs.org/guide/essentials/component-basics.html" target="_blank" rel="noopener noreferrer">
          Start building <ArrowUpRight :size="18" aria-hidden="true" />
        </a>
        <div class="stack-labels" aria-label="Project technologies">
          <span>Vue 3</span><span>Composition API</span><span>Vite</span><span>Storybook</span>
        </div>
      </section>

      <section class="resources" aria-labelledby="resources-title">
        <div class="section-heading">
          <h2 id="resources-title">Good things to have on hand.</h2>
          <span>THE TOOLKIT / 01</span>
        </div>
        <div class="resource-grid">
          <a
            v-for="resource in resources"
            :key="resource.name"
            class="resource"
            :class="resource.theme"
            :href="resource.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="resource-top">
              <component :is="resource.icon" :size="25" :stroke-width="1.6" aria-hidden="true" />
              <ArrowUpRight :size="18" aria-hidden="true" />
            </div>
            <p class="resource-label">{{ resource.label }}</p>
            <h3>{{ resource.name }}</h3>
            <p class="resource-description">{{ resource.description }}</p>
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>A little structure. A lot of possibility.</span>
      <span>Built with Vue 3 + Storybook</span>
    </footer>
  </div>
</template>