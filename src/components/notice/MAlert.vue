<template>
  <div
    class="rounded text-white p-2 fixed bottom-3 shadow shadow-lg shadow-zinc-500 left-1/2 z-50 w-11/12 -translate-x-1/2"
    :class="type"
    v-if="open"
  >
    <div class="relative">
      {{ title }}
      <button @click="$emit('close')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="absolute right-3 top-1/2 -translate-y-1/2"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AlertTypes } from '@/types/AlertTypes'
import { Ref, ref, UnwrapRef, watch } from 'vue'

const props = withDefaults(defineProps<AlertTypes>(), {
  title: '',
  description: '',
  type: 'default',
  open: false
})

const emit = defineEmits(['close'])

const open: Ref<UnwrapRef<boolean>> = ref(props.open)

watch(
  () => props.open,
  () => {
    open.value = props.open
    if (props.open) {
      setTimeout(() => {
        emit('close')
      }, 5000)
    }
  }
)
</script>

<style scoped>
.default {
  @apply bg-primary;
}
.success {
  @apply bg-green-500;
}
.info {
  @apply bg-zinc-500;
}
.error {
  @apply bg-red-500;
}
</style>
