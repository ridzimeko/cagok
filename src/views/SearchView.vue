<script setup lang="ts">
import CagokGoogle from '@/components/CagokGoogle.vue'
import SearchGuide from '@/components/SearchGuide.vue'
import CagokInfoText from '@/components/CagokInfoText.vue'

import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const query = route.query.q as string
const isRedirect = route.query.ar as string
const stepId = ref<number>(0)

function onSearch(currentStep: number) {
  stepId.value = currentStep
}
</script>

<template>
  <main>
    <CagokGoogle
      @search-progress="onSearch"
      :query="query"
      :is-redirect="isRedirect"
      style="margin-bottom: 4.2rem"
    />
    <SearchGuide :step-id="stepId" />
    <CagokInfoText>
      <template #text></template>
    </CagokInfoText>
  </main>
</template>

<style scoped></style>
