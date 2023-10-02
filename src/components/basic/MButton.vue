<template>
  <button
    :type="props.type"
    @submit="$emit('submit', $event)"
    class="rounded px-3 py-1"
    :class="getClass"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { ButtonType } from '@/types/ButtonType'

const props = withDefaults(defineProps<ButtonType>(), {
  type: 'button',
  color: 'default',
  disabled: false,
  outline: false
})

const getClass = computed(() => {
  return `${props.color} ${props.outline ? 'btn-outline' : ''}`
})
</script>

<style scoped>
.default:not([disabled]):not(.btn-outline) {
  @apply bg-white rounded ring-1 ring-zinc-400;
  @apply hover:ring-2 hover:ring-zinc-600 hover:bg-zinc-300;
  @apply focus:ring-2 focus:ring-zinc-600 focus:bg-zinc-300 focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-4;
  @apply active:ring-2 active:ring-zinc-600 active:bg-zinc-400 active:outline active:outline-2 active:outline-primary active:outline-offset-4;
  @apply transition-all duration-150;
}
.primary:not([disabled]):not(.btn-outline) {
  @apply bg-primary ring-1 ring-primary-600 text-white;
  @apply hover:bg-primary-600 hover:ring-primary-800 hover:ring-2;
  @apply focus:bg-primary-600 focus:ring-primary-800 focus:ring-2 focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-4;
  @apply active:ring-primary-800 active:ring-2 active:outline active:outline-2 active:outline-primary active:outline-offset-4 active:bg-primary-700;
  @apply transition-all duration-150;
}
.success:not([disabled]):not(.btn-outline) {
  @apply bg-green-500 ring-1 ring-green-600 text-white;
  @apply hover:bg-green-600 hover:ring-green-800 hover:ring-2;
  @apply focus:bg-green-600 focus:ring-green-800 focus:ring-2 focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-4;
  @apply active:ring-green-800 active:ring-2 active:outline active:outline-2 active:outline-primary active:outline-offset-4 active:bg-green-700;
  @apply transition-all duration-150;
}
.info:not([disabled]):not(.btn-outline) {
  @apply bg-zinc-500 ring-1 ring-zinc-600 text-white;
  @apply hover:bg-zinc-600 hover:ring-zinc-800 hover:ring-2;
  @apply focus:bg-zinc-600 focus:ring-zinc-800 focus:ring-2 focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-4;
  @apply active:ring-zinc-800 active:ring-2 active:outline active:outline-2 active:outline-primary active:outline-offset-4 active:bg-zinc-700;
  @apply transition-all duration-150;
}
.warning:not([disabled]):not(.btn-outline) {
  @apply bg-orange-500 ring-1 ring-orange-600 text-white;
  @apply hover:bg-orange-600 hover:ring-orange-800 hover:ring-2;
  @apply focus:bg-orange-600 focus:ring-orange-800 focus:ring-2 focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-4;
  @apply active:ring-orange-800 active:ring-2 active:outline active:outline-2 active:outline-primary active:outline-offset-4 active:bg-orange-700;
  @apply transition-all duration-150;
}
.danger:not([disabled]):not(.btn-outline) {
  @apply bg-red-500 ring-1 ring-red-600 text-white;
  @apply hover:bg-red-600 hover:ring-red-800 hover:ring-2;
  @apply focus:bg-red-600 focus:ring-red-800 focus:ring-2 focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-4;
  @apply active:ring-red-800 active:ring-2 active:outline active:outline-2 active:outline-primary active:outline-offset-4 active:bg-red-700;
  @apply transition-all duration-150;
}

/* outline */
.default:not([disabled]).btn-outline {
  @apply bg-white border-zinc-300 border hover:text-primary hover:border-primary active:border-primary-800 active:text-primary-800;
}
.primary:not([disabled]).btn-outline {
  @apply bg-primary-100 border border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-700 focus:bg-primary focus:text-white;
}
.success:not([disabled]).btn-outline {
  @apply bg-green-100 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white active:bg-green-700 focus:bg-green-500 focus:text-white;
}
.info:not([disabled]).btn-outline {
  @apply bg-zinc-100 border border-zinc-500 text-zinc-500 hover:bg-zinc-500 hover:text-white active:bg-zinc-700 focus:bg-zinc-500 focus:text-white;
}
.warning:not([disabled]).btn-outline {
  @apply bg-orange-100 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-700 focus:bg-orange-500 focus:text-white;
}
.danger:not([disabled]).btn-outline {
  @apply bg-red-100 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white active:bg-red-700 focus:bg-red-500 focus:text-white;
}

/* outline disabled */
.default[disabled].btn-outline {
  @apply bg-white border-zinc-200 border text-zinc-200;
}
.primary[disabled].btn-outline {
  @apply bg-primary-50 border border-primary-300 text-primary-300;
}
.success[disabled].btn-outline {
  @apply bg-green-50 border border-green-300 text-green-300;
}
.info[disabled].btn-outline {
  @apply bg-zinc-50 border border-zinc-300 text-zinc-300;
}
.warning[disabled].btn-outline {
  @apply bg-orange-50 border border-orange-300 text-orange-300;
}
.danger[disabled].btn-outline {
  @apply bg-red-50 border border-red-300 text-red-300;
}
button[disabled] {
  @apply cursor-not-allowed text-zinc-400 bg-zinc-50 ring-1 ring-zinc-400 rounded;
}
</style>
