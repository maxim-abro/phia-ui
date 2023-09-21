<template>
  <div class="flex items-center" :style="{ width: `${width}` }">
    <div class="progressbar" :class="{ 'h-2': !textInside, 'h-6': textInside }">
      <div class="progressbar-inner" :class="props.status" :style="{ width: `${percentage}%` }">
        <span class="progressbar-inner-text" v-if="textInside && percentage > 10">
          {{ percentage }}%
        </span>
      </div>
    </div>
    <div v-if="!status && !textInside" class="progressbar-text">{{ percentage }}%</div>
    <div v-if="status && !textInside" class="progressbar-text">
      {{ status }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProgressType } from '@/types/ProgressType'

const props = withDefaults(defineProps<ProgressType>(), {
  percentage: 0,
  type: 'line',
  textInside: false,
  status: '',
  width: 126
})
</script>

<style scoped>
.progressbar {
  @apply bg-zinc-300 rounded w-11/12 mr-3;
}
.progressbar-inner {
  @apply h-full transition-all duration-300 bg-primary rounded relative;
}
.progressbar-inner.success {
  @apply bg-green-500;
}
.progressbar-inner.exception {
  @apply bg-orange-500;
}
.progressbar-inner.warning {
  @apply bg-red-500;
}
.progressbar-text {
  @apply flex justify-center items-center;
}
.progressbar-inner-text {
  @apply absolute right-2 top-1/2 text-xs -translate-y-1/2;
}
</style>
