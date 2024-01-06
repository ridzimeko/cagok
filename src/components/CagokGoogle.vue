<script setup lang="ts">
import anime from 'animejs/lib/anime.es.js'
import { onMounted, ref } from 'vue'
import CagokHeader from './CagokHeader.vue'
import MagnifyIcon from '@icons/Magnify.vue'
import VirtualCursor from '@/components/VirtualCursor.vue'
import googleImage from '@/assets/google.png'

const emit = defineEmits<{
  searchProgress: [id: number]
}>()

const props = defineProps<{
  query: string
  isRedirect: string
}>()

const stepId = ref<number>(0)
const wordIdx = ref<number>(0)
const keywords = ref<string>('')
const showTooltip = ref<boolean>(false)
const inputDisabled = ref<boolean>(true)

onMounted(() => {
  emitProgress()
})

function emitProgress() {
  stepId.value++
  emit('searchProgress', stepId.value)
}

function onCursorCompleted(completed: boolean) {
  if (!completed) return false
  emitProgress()
  typeQuery()
}

function typeQuery() {
  if (wordIdx.value < props.query.length) {
    keywords.value += props.query[wordIdx.value]
    wordIdx.value++
    return setTimeout(typeQuery, 100) // set typing speed 100 ms
  }
  setTimeout(() => {
    emitProgress()
    searchIconAnimation()
  }, 1600) // add delay when typing is over
}

function searchIconAnimation() {
  anime({
    targets: '#magnify',
    keyframes: [
      { boxShadow: '0 0 0 0px rgba(0, 0, 0, 0.2)' },
      { boxShadow: '0 0 0 12px rgba(0, 0, 0, 0.2)' }
    ],
    direction: 'alternate',
    endDelay: 1400,
    complete: function () {
      emitProgress()
      redirectCagok()
    }
  })
}

function redirectCagok() {
  const googleQuery = 'https://google.com/search?q=' + encodeURIComponent(props.query)

  if (props.isRedirect === '1') {
    return setTimeout(() => (window.location.href = googleQuery), 3000)
  } else if (!inputDisabled.value) {
    return (window.location.href = googleQuery)
  }
  enableInput()
  showTooltip.value = !showTooltip.value
}

function enableInput() {
  inputDisabled.value = !inputDisabled.value
}
</script>

<template>
  <section>
    <CagokHeader :header-logo="googleImage" :logo-size="16" />
    <div class="is-flex is-relative">
      <input type="text" :value="keywords" class="input is-rounded" :readonly="inputDisabled" />
      <button id="magnify" class="px-2 input-icon" @click="redirectCagok" :disabled="inputDisabled">
        <MagnifyIcon />
      </button>
    </div>
    <span v-show="showTooltip" id="tooltip">Tekan untuk melanjutkan</span>
    <VirtualCursor @cursor-completed="onCursorCompleted" />
  </section>
</template>

<style scoped>
#tooltip {
  font-size: 12px;
  float: right;
  margin-top: 8px;
  border: 0px solid black;
}

#magnify {
  padding-top: 6px;
  border-radius: 50%;
  top: -2px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
}

#magnify:not(:disabled):hover {
  cursor: pointer;
}
</style>
