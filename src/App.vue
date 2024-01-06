<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSeoMeta } from '@unhead/vue'
import { reactive } from 'vue'

interface CagokMeta {
  title: string
  description: string
  url: string
  image: string
}

const meta = reactive<CagokMeta>({
  title: import.meta.env.VITE_APP_TITLE,
  description: import.meta.env.VITE_APP_DESCRIPTION,
  url: import.meta.env.VITE_APP_BASE,
  image: import.meta.env.VITE_APP_IMAGE_URL
})

useSeoMeta({
  title: meta.title,
  ogTitle: meta.title,
  description: meta.description,
  ogDescription: meta.description,
  ogUrl: meta.url,
  ogImage: meta.url + meta.image,
  twitterCard: 'summary',
  twitterImage: meta.url + meta.image
})
</script>

<template>
  <RouterView />
</template>
