<script setup lang="ts">
const props = defineProps<{
  stepId: number
}>()

const steps = [
  {
    id: 1,
    title: 'Langkah 1',
    message: 'Buka halaman pencarian Google lalu klik kolom pencarian'
  },
  {
    id: 2,
    title: 'Langkah 2',
    message: 'Ketik pertanyaan yang kamu inginkan'
  },
  {
    id: 3,
    title: 'Langkah 3',
    message: 'Tekan tombol ini untuk melakukan pencarian'
  },
  {
    id: 4,
    title: 'Udah gitu doang',
    message: 'Semalas itukah kamu mencari jawaban di internet?'
  }
]
</script>

<template>
  <div
    class="message mx-auto"
    style="max-width: 520px"
    v-for="step in steps"
    :key="step.id"
    :class="{ 'is-hidden': step.id !== props.stepId }"
  >
    <div class="message-header">
      {{ step.title }}
    </div>
    <div class="message-body">
      {{ step.message }}
    </div>
  </div>
</template>
