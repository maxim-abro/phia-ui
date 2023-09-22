<template>
  <div class="flex flex-col items-center">
    <svg
      v-if="icon === 'success'"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="icon success"
      viewBox="0 0 16 16"
    >
      <path
        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
      />
    </svg>
    <svg
      v-if="icon === 'info'"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="icon info"
      viewBox="0 0 16 16"
    >
      <path
        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      />
    </svg>
    <svg
      v-if="icon === 'warning'"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="icon warning"
      viewBox="0 0 16 16"
    >
      <path
        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"
      />
    </svg>
    <svg
      v-if="icon === 'error'"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="icon error"
      viewBox="0 0 16 16"
    >
      <path
        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
    <div class="title">{{ title }}</div>
    <div class="subtitle">{{ subTitle }}</div>
    <m-button class="w-max" color="primary" @click="$emit('back', $event)">Назад</m-button>
  </div>
</template>

<script setup lang="ts">
import type { ResultType } from '@/types/ResultType'
import MButton from '@/components/basic/MButton.vue'

withDefaults(defineProps<ResultType>(), {
  title: '',
  subTitle: '',
  icon: 'info'
})
</script>

<style scoped>
.icon {
  @apply rounded-full h-14 w-auto text-white mb-6;
}
.icon.success {
  @apply bg-green-500;
}
.icon.info {
  @apply bg-zinc-500;
}
.icon.warning {
  @apply bg-orange-500;
}
.icon.error {
  @apply bg-red-500;
}
.title {
  @apply font-bold text-2xl mb-2;
}
.subtitle {
  @apply text-lg mb-4;
}
</style>
