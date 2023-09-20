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
  @apply bg-white border-zinc-300 border hover:bg-primary-50 hover:text-primary hover:border-primary active:border-primary-800 active:text-primary-800 focus:bg-primary-50;
}
.primary:not([disabled]):not(.btn-outline) {
  @apply bg-primary text-white hover:bg-primary-400 active:bg-primary-700 focus:bg-primary-400;
}
.success:not([disabled]):not(.btn-outline) {
  @apply bg-green-500 text-white hover:bg-green-400 active:bg-green-500 focus:bg-green-400;
}
.info:not([disabled]):not(.btn-outline) {
  @apply bg-zinc-500 text-white hover:bg-zinc-400 active:bg-zinc-500 focus:bg-zinc-400;
}
.warning:not([disabled]):not(.btn-outline) {
  @apply bg-orange-500 text-white hover:bg-orange-400 active:bg-orange-500 focus:bg-orange-400;
}
.danger:not([disabled]):not(.btn-outline) {
  @apply bg-red-500 text-white hover:bg-red-400 active:bg-red-500 focus:bg-red-400;
}

/* disabled */
.default[disabled] {
  @apply bg-white border-zinc-300 border text-zinc-300;
}
.primary[disabled] {
  @apply bg-primary-300 text-white;
}
.success[disabled] {
  @apply bg-green-300 text-white;
}
.info[disabled] {
  @apply bg-zinc-300 text-white;
}
.warning[disabled] {
  @apply bg-orange-300 text-white;
}
.danger[disabled] {
  @apply bg-red-300 text-white;
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
  @apply cursor-not-allowed;
}
</style>
