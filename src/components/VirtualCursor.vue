<script setup lang="ts">
import CursorIcon from '@icons/CircleSlice8.vue'
import { onMounted, ref } from 'vue'
import anime from 'animejs/lib/anime.es.js'

const emit = defineEmits<{
  cursorCompleted: [value: boolean]
}>()

const isCompleted = ref<boolean>(false)

onMounted(() => {
  const animation = anime.timeline({
    targets: '#cursor',
    complete: function () {
      emit('cursorCompleted', !isCompleted.value)
    }
  })

  animation.add({
    opacity: {
      value: 1,
      duration: 100
    },
    translateX: '+=40vw',
    translateY: 125,
    duration: 1200,
    delay: 600,
    endDelay: 800,
    easing: 'easeOutExpo'
  })

  animation.add({
    keyframes: [{ scale: '-=0.4' }, { scale: '+=0.4' }, { opacity: 0, delay: 740 }],
    duration: 620,
    endDelay: 200,
    easing: 'easeOutSine'
  })

  animation.play()
})
</script>

<template>
  <div id="cursor">
    <CursorIcon :size="28" />
  </div>
</template>

<style scoped>
#cursor {
  position: absolute;
  top: 2.4rem;
  left: 2.4rem;
  opacity: 0;
  z-index: 100;
}
</style>
