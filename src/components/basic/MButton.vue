<template>
  <button
    :type="props.type"
    @submit="$emit('submit', $event)"
    class="rounded px-3 py-1"
    :class="getClass"
    :disabled="props.disabled"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue";
import type {ButtonType} from "@/types/ButtonType";

const props = withDefaults(defineProps<ButtonType>(), {
  type: 'button',
  color: 'default',
  disabled: false,
  outline: false,
});

const getClass = computed(() => {
  return `${props.color} ${props.outline ? 'btn-outline' : ''}`
});
</script>
