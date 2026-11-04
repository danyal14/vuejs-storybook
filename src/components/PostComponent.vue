<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="post">
    <a class="post-link" :href="href">
      <img
        class="post-image"
        :src="imageSrc"
        :alt="imageAlt"
        width="960"
        height="540"
        loading="lazy"
        decoding="async"
      />
      <h2 class="post-headline">{{ headline }}</h2>
    </a>
  </article>
</template>

<style scoped>
.post {
  width: 100%;
  max-width: 420px;
  overflow: hidden;
  border: 1px solid #dfe5e1;
  border-radius: 8px;
  background: #fff;
}

.post-link {
  display: block;
  color: var(--ink, #233b32);
  text-decoration: none;
}

.post-link:focus-visible {
  outline: 3px solid #267653;
  outline-offset: -3px;
}

.post-image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #edf4ef;
}

.post-headline {
  margin: 0;
  padding: 20px;
  font-size: 22px;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.post-link:hover .post-headline,
.post-link:focus-visible .post-headline {
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>