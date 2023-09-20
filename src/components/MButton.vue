<template>
  <button :type="props.type" @submit="$emit('submit', $event)">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type {ButtonType} from "@/types/ButtonType";

const props = withDefaults(defineProps<ButtonType>(), {
  type: 'button',
  color: 'primary',
  disabled: false,
});
</script>
