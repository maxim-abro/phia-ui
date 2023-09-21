<template>
  <div
    class="border border-zinc-400 w-max rounded"
    :class="{ 'hover:border-primary-400': !disabled }"
  >
    <button
      class="px-4 py-3 bg-zinc-100 rounded-l font-bold"
      :class="{
        'hover:text-primary-400': !isMin || !disabled,
        'text-zinc-400 bg-zinc-50': isMin || disabled
      }"
      @click="editValue('-')"
      :disabled="isMin || disabled"
    >
      -
    </button>

    <input
      @blur="validateInput"
      v-model="input"
      type="text"
      :disabled="disabled"
      class="text-center focus:outline-none w-14 h-full"
      :class="{ 'text-zinc-400': disabled }"
    />

    <button
      class="px-4 py-3 bg-zinc-100 rounded-r font-bold"
      :class="{
        'hover:text-primary-400': !isMax || !disabled,
        'text-zinc-400 bg-zinc-50': isMax || disabled
      }"
      @click="editValue('+')"
      :disabled="isMax || disabled"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import type { InputNumberType } from '@/types/InputNumberType'
import { computed, onMounted, Ref, ref, UnwrapRef } from 'vue'

const props = withDefaults(defineProps<InputNumberType>(), {
  steps: 1,
  disabled: false,
  inputValue: 0,
  max: 999999,
  min: -999999
})

const input: Ref<UnwrapRef<string>> = ref('')

const emit = defineEmits(['update:modelValue'])

onMounted(() => {
  input.value = props.inputValue + ''
})

function editValue(symbol: string) {
  if (symbol === '+') {
    props.max !== parseInt(input.value, 10)
      ? updateValue(parseInt(input.value, 10) + props.steps)
      : ''
  } else if (symbol === '-') {
    props.min !== parseInt(input.value, 10)
      ? updateValue(parseInt(input.value, 10) - props.steps)
      : ''
  }
}

function updateValue(value: number): void {
  if (value || value === 0) {
    input.value = value + ''
  }
  emit('update:modelValue', value)
}

function validateInput(): void {
  input.value = input.value.replace(/[^0-9]/gi, '')
  if (parseInt(input.value, 10) >= props.max) {
    input.value = props.max + ''
  }
  if (parseInt(input.value, 10) <= props.min) {
    input.value = props.min + ''
  }
}

const isMin = computed((): boolean => {
  return parseInt(input.value, 10) === props.min
})

const isMax = computed((): boolean => {
  return parseInt(input.value, 10) === props.max
})
</script>

<style scoped></style>
