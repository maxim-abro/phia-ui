<template>
  <select :name="name" :disabled="disabled" v-model="val" class="select-container">
    <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
    <slot />
  </select>
</template>

<script setup lang="ts">
import type { SelectType } from '@/types/SelectType'
import { Ref, ref, UnwrapRef, watch } from 'vue'

const props = withDefaults(defineProps<SelectType>(), {
  placeholder: '',
  value: '',
  disabled: false,
  clearable: false,
  name: ''
})

const val: Ref<UnwrapRef<string>> = ref(props.value)

const emit = defineEmits(['update:modelValue'])

watch(
  () => val.value,
  () => {
    emit('update:modelValue', val.value)
  }
)
</script>

<style scoped>
.select-container {
  @apply border border-zinc-400 py-1 rounded;
}
.select-container:not([disabled]) {
  @apply hover:border-zinc-700 focus:border-primary-600 focus:border-2 focus:outline-0 cursor-pointer;
}
</style>
