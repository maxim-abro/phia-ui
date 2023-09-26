<template>
  <nav>
    <ol class="flex items-center flex-wrap">
      <li>
        <a class="text-gray-600 text-xs md:text-base hover:underline" href="/">Главная</a>
      </li>

      <li
        v-for="(crumb, idx) in crumbs"
        :key="idx"
        class="breadcrumb-item"
        :class="{ 'text-primary': isActive(idx) }"
      >
        <span class="mx-3 text-gray-500 text-xs md:text-base"> / </span>
        <a
          v-if="crumb.link"
          class="text-gray-600 text-xs md:text-base hover:underline"
          :href="crumb.link"
          >{{ crumb.title }}</a
        >
        <span v-if="!crumb.link" class="text-primary text-xs md:text-base">{{ crumb.title }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { BreadcrumbsType } from '@/types/BreadcrumbsType'

const props = defineProps<BreadcrumbsType>()
function isActive(index: number): boolean {
  return index === props.crumbs.length
}
</script>
