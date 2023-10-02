<template>
  <a href="" @click.prevent class="rounded-2xl px-2 pt-0.5 pb-1 text-xs whitespace-nowrap tag" :class="props.type">
    <slot />
    <svg
      @click="$emit('close', $event)"
      v-if="closable"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="inline rounded-full hover:bg-black cursor-pointer ml-1"
      :class="`close-${type}`"
      viewBox="0 0 16 16"
    >
      <path
        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </a>
</template>

<script setup lang="ts">
import type { TagType } from '@/types/TagType'

const props = withDefaults(defineProps<TagType>(), {
  type: 'default',
  closable: false
})
</script>

<style scoped>
.primary {
  @apply text-primary-800 bg-primary-200 cursor-pointer;
  @apply hover:ring-1 hover:ring-primary-600;
  @apply focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-primary;
  @apply active:bg-primary-300 active:outline active:outline-offset-2 active:outline-2 active:outline-primary;
  @apply transition-all duration-150;
}
.success {
  @apply text-green-800 bg-green-200 cursor-pointer;
  @apply hover:ring-1 hover:ring-green-600;
  @apply focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-primary;
  @apply active:bg-green-300 active:outline active:outline-offset-2 active:outline-2 active:outline-primary;
  @apply transition-all duration-150;
}
.warning {
  @apply text-orange-800 bg-orange-200 cursor-pointer;
  @apply hover:ring-1 hover:ring-orange-600;
  @apply focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-primary;
  @apply active:bg-orange-300 active:outline active:outline-offset-2 active:outline-2 active:outline-primary;
  @apply transition-all duration-150;
}
.danger {
  @apply text-red-800 bg-red-200 cursor-pointer;
  @apply hover:ring-1 hover:ring-red-600;
  @apply focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-primary;
  @apply active:bg-red-300 active:outline active:outline-offset-2 active:outline-2 active:outline-primary;
  @apply transition-all duration-150;
}
.default {
  @apply text-zinc-700 bg-zinc-200 cursor-pointer;
  @apply hover:ring-1 hover:ring-zinc-600;
  @apply focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-primary;
  @apply active:bg-zinc-300 active:outline active:outline-offset-2 active:outline-2 active:outline-primary;
  @apply transition-all duration-150;
}

.close-primary {
  @apply hover:bg-primary hover:text-primary-50;
}
.close-success {
  @apply hover:bg-green-500 hover:text-green-50;
}
.close-info {
  @apply hover:bg-zinc-500 hover:text-zinc-50;
}
.close-warning {
  @apply hover:bg-orange-500 hover:text-orange-50;
}
.close-danger {
  @apply hover:bg-red-500 hover:text-red-50;
}
</style>
