<template>
  <h2 class="text-3xl font-bold my-8">Button</h2>

  <h3 class="text-xl font-bold my-4">default</h3>
  <div class="">
    <m-button class="mr-3">default</m-button>
    <m-button class="mr-3" color="primary">primary</m-button>
    <m-button class="mr-3" color="success">success</m-button>
    <m-button class="mr-3" color="info">info</m-button>
    <m-button class="mr-3" color="warning">warning</m-button>
    <m-button class="mr-3" color="danger">danger</m-button>
  </div>

  <h3 class="text-xl font-bold my-4">disabled</h3>
  <div class="">
    <m-button disabled class="mr-3">default</m-button>
    <m-button disabled class="mr-3" color="primary">primary</m-button>
    <m-button disabled class="mr-3" color="success">success</m-button>
    <m-button disabled class="mr-3" color="info">info</m-button>
    <m-button disabled class="mr-3" color="warning">warning</m-button>
    <m-button disabled class="mr-3" color="danger">danger</m-button>
  </div>

  <h3 class="text-xl font-bold my-4">outline</h3>
  <div class="">
    <m-button outline class="mr-3">default</m-button>
    <m-button outline class="mr-3" color="primary">primary</m-button>
    <m-button outline class="mr-3" color="success">success</m-button>
    <m-button outline class="mr-3" color="info">info</m-button>
    <m-button outline class="mr-3" color="warning">warning</m-button>
    <m-button outline class="mr-3" color="danger">danger</m-button>
  </div>

  <h3 class="text-xl font-bold my-4">outline disabled</h3>
  <div class="">
    <m-button outline disabled class="mr-3">default</m-button>
    <m-button outline disabled class="mr-3" color="primary">primary</m-button>
    <m-button outline disabled class="mr-3" color="success">success</m-button>
    <m-button outline disabled class="mr-3" color="info">info</m-button>
    <m-button outline disabled class="mr-3" color="warning">warning</m-button>
    <m-button outline disabled class="mr-3" color="danger">danger</m-button>
  </div>

  <h2 class="text-3xl font-bold my-8">Link</h2>

  <h3 class="text-xl font-bold my-4">default</h3>
  <div class="">
    <m-link href="/test" class="mr-3">default</m-link>
    <m-link href="/test" class="mr-3" color="primary">primary</m-link>
    <m-link href="/test" class="mr-3" color="success">success</m-link>
    <m-link href="/test" class="mr-3" color="info">info</m-link>
    <m-link href="/test" class="mr-3" color="warning">warning</m-link>
    <m-link href="/test" class="mr-3" color="danger">danger</m-link>
  </div>

  <h3 class="text-xl font-bold my-4">underline</h3>
  <div class="">
    <m-link underline href="/test" class="mr-3">default</m-link>
    <m-link underline href="/test" class="mr-3" color="primary">primary</m-link>
    <m-link underline href="/test" class="mr-3" color="success">success</m-link>
    <m-link underline href="/test" class="mr-3" color="info">info</m-link>
    <m-link underline href="/test" class="mr-3" color="warning">warning</m-link>
    <m-link underline href="/test" class="mr-3" color="danger">danger</m-link>
  </div>

  <h3 class="text-xl font-bold my-4">underline</h3>
  <div class="">
    <m-link disabled underline href="/test" class="mr-3">default</m-link>
    <m-link disabled underline href="/test" class="mr-3" color="primary">primary</m-link>
    <m-link disabled underline href="/test" class="mr-3" color="success">success</m-link>
    <m-link disabled underline href="/test" class="mr-3" color="info">info</m-link>
    <m-link disabled underline href="/test" class="mr-3" color="warning">warning</m-link>
    <m-link disabled underline href="/test" class="mr-3" color="danger">danger</m-link>
  </div>
</template>
<script setup lang="ts">
import MButton from "./components/basic/MButton.vue";
import MLink from "./components/basic/MLink.vue";
</script>
