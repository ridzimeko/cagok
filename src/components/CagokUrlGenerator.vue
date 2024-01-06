<script setup lang="ts">
import { computed, ref } from 'vue'
import copy from 'copy-text-to-clipboard'
import LinkIcon from '@icons/Link.vue'
import OpenInNewIcon from '@icons/OpenInNew.vue'
import ContentCopyIcon from '@icons/ContentCopy.vue'

const emit = defineEmits<{
  copiedQuery: [value: boolean]
}>()

const searchQuery = ref<string>('')
const isAutoRedirect = ref<boolean>(false)

const queryLink = computed<string>(() => {
  const currentUrl = window.location.origin
  const queryParam = '/search?q=' + encodeURIComponent(searchQuery.value)
  const redirectParam = '&ar=' + (isAutoRedirect.value ? '1' : '0')

  return currentUrl + queryParam + redirectParam
})

function checkInput(): boolean {
  const inputHelp = document.getElementById('search-help')

  if (!searchQuery.value) {
    inputHelp?.classList.remove('is-hidden')
    return false
  }

  inputHelp?.classList.add('is-hidden')
  return true
}

function addErrorAnimation() {
  const input = document.getElementById('search-input')
  input?.classList.add('animate__animated', 'animate__headShake')
}

function removeAnimation() {
  const input = document.getElementById('search-input')
  input?.classList.remove('animate__animated', 'animate__headShake')
}

function copyUrl(): void {
  if (!checkInput()) return addErrorAnimation()

  const queryCopied = copy(queryLink.value) // Copy the query link
  emit('copiedQuery', queryCopied)
}

function previewUrl(): void {
  if (!checkInput()) return addErrorAnimation()

  window.open(queryLink.value)
}
</script>

<template>
  <div id="cagok-form">
    <div id="search-input" @animationend="removeAnimation">
      <input class="input is-rounded" v-model.trim="searchQuery" @input="checkInput" />
      <p id="search-help" class="help is-danger is-hidden">Kamu belum mengisi teks pencarian!</p>
    </div>

    <div>
      <label class="checkbox my-3">
        <input type="checkbox" v-model="isAutoRedirect" />
        Redirect otomatis
      </label>
      <br />
      <label for="q-result" class="" v-show="searchQuery">
        <p class="has-text-centered mb-2">Tautan pencarian :</p>
        <div @click="copyUrl" class="is-flex is-relative">
          <input
            v-show="searchQuery"
            :value="queryLink"
            id="qResult"
            class="mb-5 input is-pointer"
            readonly
          />
          <ContentCopyIcon
            title="Copy icon button"
            class="has-background-white px-2 input-icon"
            style=""
          />
        </div>
      </label>
    </div>

    <div class="buttons is-flex is-justify-content-center" style="gap: 1.2rem">
      <button class="button" @click="copyUrl">
        <LinkIcon title="link icon" />
        <span>Salin Tautan</span>
      </button>
      <button class="button" @click="previewUrl">
        <OpenInNewIcon />
        <span>Lihat Preview</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
