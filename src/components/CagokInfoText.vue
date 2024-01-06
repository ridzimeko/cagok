<script setup lang="ts">
import GithubIcon from '@icons/Github.vue'
</script>

<template>
  <p id="cagok-info" class="has-text-centered mt-6">
    Powered by
    <a href="/">Cagok</a>
    <span class="mx-2">-</span>
    <a href="https://github.com/ridzimeko/cagok" class="has-text-grey-dark">
      <span class="mr-1">Source code</span>
      <GithubIcon />
    </a>
  </p>
</template>

<style>
#cagok-info {
  display: inherit;
  font-size: 14px;
}

#cagok-info a[href]:hover {
  text-decoration: underline;
}
</style>
