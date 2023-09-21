<template>
  <ul class="">
    <span class="hover:bg-zinc-100 py-1.5 px-3 cursor-pointer" @click="props.data.children.length ? isOpen = !isOpen : ''">
      {{ props.data.label }}
      <span v-if="props.data.children.length" :class="isOpen ? 'rotate-180' : ''">^</span>
    </span>
    <transition v-if="props.data.children.length"
                enter-active-class="duration-500 ease"
                enter-class="overflow-hidden max-h-0"
                enter-to-class="max-h-[200px] overflow-hidden"
                leave-active-class="duration-500 ease-[cubic-bezier(0, 1, 0.5, 1)]"
                leave-class="max-h-[200px] overflow-hidden"
                leave-to-class="overflow-hidden max-h-0"
    >
      <li class="pl-4" v-if="isOpen">
        <m-three v-for="(item, _idx) of props.data.children" :data="item" :key="_idx"/>
      </li>
    </transition>
  </ul>
</template>

<script setup lang="ts">
import type { ThreeType } from "@/types/ThreeType";
import { ref } from "vue";

const props = defineProps<ThreeType>()

const isOpen = ref(false)
</script>
