<template>
  <div class="relative">
    <input
      :type="typeIn"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="updateValue"
      class="input"
      v-model="valueIn"
    />
    <button
      class="absolute right-2 top-1/2 -translate-y-1/2"
      @click="clear"
      v-if="props.clearable && valueIn.length"
    >
      clear
    </button>

    <button
      class="absolute right-2 top-1/2 -translate-y-1/2"
      @click="editShowPassword"
      v-if="props.showPassword"
    >
      eye
    </button>
  </div>
</template>

<script setup lang="ts">
import type { InputType } from '@/types/InputType'
import { Ref, ref, UnwrapRef } from 'vue'

const props = withDefaults(defineProps<InputType>(), {
  type: 'text',
  clearable: false,
  showPassword: false,
  disabled: false
})

const typeIn: Ref<UnwrapRef<string>> = ref(props.type)
const emit = defineEmits(['update:modelValue'])

function updateValue(event: any) {
  emit('update:modelValue', event.target.value)
}

const valueIn: Ref<UnwrapRef<string>> = ref('')

const editShowPassword = () =>
  typeIn.value === 'password' ? (typeIn.value = 'text') : (typeIn.value = 'password')

function clear(e: any) {
  valueIn.value = ''
  emit('update:modelValue', '')
}
</script>

<style scoped>
.input {
  @apply w-full py-1 pl-1 focus:outline-0 placeholder:text-zinc-400 placeholder:font-light border border-zinc-400 rounded hover:border-zinc-700 focus:border-primary-600;
}
</style>
