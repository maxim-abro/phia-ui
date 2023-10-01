<template>
  <div class="relative w-max">
    <m-button @click="openMenu" v-if="type === 'button'" class="relative">
      <slot />
    </m-button>
    <div @click="openMenu" v-else class="text-primary relative">
      <slot />
    </div>
    <ul
      v-if="isOpen"
      @mouseleave="closeMenu"
      class="bg-white shadow absolute left-0 -bottom-1 w-full translate-y-full"
    >
      <slot name="dropdown" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { DropdownType } from '@/types/DropdownType'
import MButton from '@/components/basic/MButton.vue'
import { Ref, ref, UnwrapRef } from 'vue'

const props = withDefaults(defineProps<DropdownType>(), {
  type: 'text',
  maxHeight: 50,
  disabled: false,
  trigger: 'hover',
  hideTimeout: 250
})

const isOpen: Ref<UnwrapRef<boolean>> = ref(false)

function openMenu(): void {
  isOpen.value = true
}

function closeMenu() {
  setTimeout(() => (isOpen.value = false), props.hideTimeout)
}
</script>
