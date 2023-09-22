<template>
  <span class="border rounded px-3 pt-1.5 pb-2 text-sm whitespace-nowrap tag" :class="props.type">
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
  </span>
</template>

<script setup lang="ts">
import type { TagType } from '@/types/TagType'

const props = withDefaults(defineProps<TagType>(), {
  type: 'primary',
  closable: false
})
</script>

<style scoped>
.primary {
  @apply border-primary text-primary bg-primary-50;
}
.success {
  @apply border-green-500 text-green-500 bg-green-50;
}
.info {
  @apply border-zinc-500 text-zinc-500 bg-zinc-50;
}
.warning {
  @apply border-orange-500 text-orange-500 bg-orange-50;
}
.danger {
  @apply border-red-500 text-red-500 bg-red-50;
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
