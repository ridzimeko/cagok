<script setup lang="ts">
const props = defineProps<{
  headerLogo?: string
  altLogo?: string
  logoSize?: number
}>()
</script>

<template>
  <div class="has-text-centered mt-6 mb-4">
    <img
      v-if="props.headerLogo"
      :style="{ width: logoSize + 'em' }"
      :src="headerLogo"
      :alt="altLogo"
      :title="altLogo"
    />
    <h1 class="is-size-1">
      <slot name="title"></slot>
    </h1>
    <h2 class="is-size-4">
      <slot name="sub_title"></slot>
    </h2>
  </div>
</template>
