<template>
  <div class="relative inline-block">
    <slot />
    <sup v-if="value" class="badge" :class="getClass">{{ getValue }}</sup>
  </div>
</template>

<script setup lang="ts">
import type { BadgeType } from '@/types/BadgeType'
import { computed, ComputedRef } from 'vue'

const props = withDefaults(defineProps<BadgeType>(), {
  value: 0,
  max: 10,
  isDot: false,
  hidden: false,
  type: 'default'
})

const getValue = computed(() => {
  if (props.value > props.max) {
    return props.max + '+'
  } else {
    return props.value && !props.isDot ? props.value : ''
  }
})
const getClass: ComputedRef<string> = computed(() => `${props.type} ${props.isDot ? 'dot' : ''}`)
</script>

<style scoped>
.badge {
  @apply rounded-full border border-white absolute top-0 right-1 -translate-y-1/2 translate-x-full flex justify-center items-center text-white;
}

.badge:not(.dot) {
  @apply min-w-[20px] h-5 px-1;
}

.badge.default {
  @apply bg-primary;
}
.badge.success {
  @apply bg-green-500;
}
.badge.info {
  @apply bg-zinc-500;
}
.badge.warning {
  @apply bg-orange-500;
}
.badge.danger {
  @apply bg-red-500;
}
.badge.dot {
  @apply h-2 w-2;
}
</style>
