<template>
  <a :href="props.href" :class="getClass">
    <slot />
  </a>
</template>

<script setup lang="ts">
import type { LinkType } from '@/types/LinkType'
import { computed } from 'vue'

const props = withDefaults(defineProps<LinkType>(), {
  color: 'default',
  disabled: false,
  href: '#',
  underline: false
})

const getClass = computed(() => {
  return `${props.color} ${props.underline ? 'link-underline' : ''} ${
    props.disabled ? 'link-disabled' : ''
  }`
})
</script>

<style scoped>
.default:not(.disabled) {
  @apply hover:text-primary;
}
.primary:not(.disabled) {
  @apply text-primary hover:text-primary-800;
}
.success:not(.disabled) {
  @apply text-green-500 hover:text-green-800;
}
.info:not(.disabled) {
  @apply text-zinc-500 hover:text-zinc-800;
}
.warning:not(.disabled) {
  @apply text-orange-500 hover:text-orange-800;
}
.danger:not(.disabled) {
  @apply text-red-500 hover:text-red-800;
}

.default.link-disabled {
  @apply text-zinc-300;
}
.primary.link-disabled {
  @apply text-primary-200;
}
.success.link-disabled {
  @apply text-green-300;
}
.info.link-disabled {
  @apply text-zinc-300;
}
.warning.link-disabled {
  @apply text-orange-300;
}
.danger.link-disabled {
  @apply text-red-300;
}

.link-underline:not(.disabled) {
  @apply hover:underline;
}

.link-disabled {
  @apply pointer-events-none cursor-not-allowed;
}
</style>
