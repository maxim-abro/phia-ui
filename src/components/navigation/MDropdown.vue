<template>
  <div v-if="type === 'text'" class="text-primary">
    <slot />
  </div>
  <m-button v-if="type === 'button'">
    <slot />
  </m-button>

  <div v-if="isOpen" class="">
    <slot name="dropdown"/>
  </div>
</template>

<script setup lang="ts">
import type { DropdownType } from '@/types/DropdownType'
import MButton from '@/App.vue'
import { Ref, ref, UnwrapRef } from "vue";

const props = withDefaults(defineProps<DropdownType>(), {
  type: 'text',
  maxHeight: 50,
  disabled: false,
  trigger: 'hover',
  hideTimeout: 250
})

const isOpen:Ref<UnwrapRef<boolean>> = ref(false)

function openMenu() {
  isOpen.value = false
}
</script>
