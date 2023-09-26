<template>
  <div ref="slot">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { CollapseType } from '@/types/CollapseType'

withDefaults(defineProps<CollapseType>(), {
  accordion: false
})

const slot = ref(null)
// const collapseItems = ref(null)

onMounted(() => {
  // collapseItems.value = slot.value.__vueParentComponent.slots.default()
})
</script>
