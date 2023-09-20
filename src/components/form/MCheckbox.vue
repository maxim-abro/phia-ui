<template>
  <div class="flex items-center cursor-pointer">
    <input type="checkbox" :id="name" :name="name" :checked="checkedIn" :disabled="disabled" v-model="checkedIn" @change="$emit('change', $event)" class="checkbox">
    <label class="label" :for="name">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">


import type {CheckboxModel} from "@/types/CheckboxModel";
import {onMounted, Ref, ref, UnwrapRef, watch} from "vue";

const props = withDefaults(defineProps<CheckboxModel>(), {
  label: "",
  disabled: false,
  name: "",
  checked: false,
});

const checkedIn:Ref<UnwrapRef<boolean>> = ref(false)

const emit = defineEmits(["update:modelValue"]);

onMounted(() => {
  checkedIn.value = props.checked;
});

watch(checkedIn, (val) => {
  emit('update:modelValue', val);
})
</script>

<style scoped>
.checkbox:not([disabled]) {
  @apply w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer mr-1
}
.label:not([disabled]) {
  @apply ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer
}
</style>
