<template>
  <div class="border-t border-b">
    <div
      class="cursor-pointer w-full py-4 mb-2 flex justify-between items-center"
      @click="toggleItem"
    >
      {{ title }} <span>galka</span>
    </div>
    <div v-if="isOpen.bool" class="mb-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CollapseItemType } from '@/types/CollapseType'
import { reactive } from 'vue'

const props = withDefaults(defineProps<CollapseItemType>(), {
  title: '',
  id: 0,
  disabled: false
})

const isOpen = reactive({
  bool: false as boolean
})

const emit = defineEmits(['toggle'])
function toggleItem() {
  if (!props.disabled) {
    isOpen.bool = !isOpen.bool
    emit('toggle', { isOpen: isOpen.bool, id: props.id })
  }
}
</script>
