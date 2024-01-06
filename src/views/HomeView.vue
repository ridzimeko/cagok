<script setup lang="ts">
import CagokUrlGenerator from '@/components/CagokUrlGenerator.vue'
import ToastMessage from '@/components/ToastMessage.vue'
import CagokHeader from '@/components/CagokHeader.vue'
import CagokInfoText from '@/components/CagokInfoText.vue'
import { ref } from 'vue'

const showToast = ref<boolean>(false)
const isCopied = ref<boolean>(false)

function onCopied(copiedStatus: boolean) {
  isCopied.value = copiedStatus
  showToast.value = true
  setTimeout(() => (showToast.value = false), 3600)
}
</script>

<template>
  <main>
    <section class="mx-4">
      <CagokHeader>
        <template #title>Cagok</template>
        <template #sub_title>Cari aja dulu di Google kawan</template>
      </CagokHeader>
      <div>
        <CagokUrlGenerator @copied-query="onCopied" />
      </div>
    </section>

    <Transition
      name="fade"
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <ToastMessage :type="isCopied ? 'success' : 'danger'" :show="showToast">
        {{
          isCopied
            ? 'Tautan berhasil disalin'
            : 'Gagal menyalin tautan, sepertinya browser kamu tidak support'
        }}
      </ToastMessage>
    </Transition>
    <CagokInfoText />
  </main>
</template>
