<script setup lang="ts">
import ClipCheckIcon from '@icons/ClipboardCheckOutline.vue'
import ClipAlertIcon from '@icons/ClipboardAlertOutline.vue'

const props = defineProps<{
  type: 'success' | 'danger'
  show: boolean
}>()
</script>

<template>
  <Transition>
    <div id="toast-msg" v-show="$props.show" :class="'notification is-' + props.type">
      <ClipCheckIcon v-if="$props.type === 'success'" />
      <ClipAlertIcon v-else />
      <span>
        <slot></slot>
      </span>
    </div>
  </Transition>
</template>

<style scoped>
#toast-msg {
  display: flex;
  align-items: center;
  position: absolute;
  max-width: 520px;
  width: max-content;
  bottom: 2rem;
  left: 0;
  right: 0;
  padding: 0.6rem 1rem;
  margin: 0 auto !important;
}

@media (max-width: 640px) {
  #toast-msg {
    max-width: 420px;
  }
}

#toast-msg svg {
  vertical-align: middle;
}
</style>
