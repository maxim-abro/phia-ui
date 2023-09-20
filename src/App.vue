<template>
  <h1 class="text-3xl font-bold my-8">Button</h1>

  <h2 class="text-xl font-bold my-4">default</h2>
  <div class="">
    <m-button class="mr-3">default</m-button>
    <m-button class="mr-3" color="primary">primary</m-button>
    <m-button class="mr-3" color="success">success</m-button>
    <m-button class="mr-3" color="info">info</m-button>
    <m-button class="mr-3" color="warning">warning</m-button>
    <m-button class="mr-3" color="danger">danger</m-button>
  </div>

  <h2 class="text-xl font-bold my-4">disabled</h2>
  <div class="">
    <m-button disabled class="mr-3">default</m-button>
    <m-button disabled class="mr-3" color="primary">primary</m-button>
    <m-button disabled class="mr-3" color="success">success</m-button>
    <m-button disabled class="mr-3" color="info">info</m-button>
    <m-button disabled class="mr-3" color="warning">warning</m-button>
    <m-button disabled class="mr-3" color="danger">danger</m-button>
  </div>

  <h2 class="text-xl font-bold my-4">outline</h2>
  <div class="">
    <m-button outline class="mr-3">default</m-button>
    <m-button outline class="mr-3" color="primary">primary</m-button>
    <m-button outline class="mr-3" color="success">success</m-button>
    <m-button outline class="mr-3" color="info">info</m-button>
    <m-button outline class="mr-3" color="warning">warning</m-button>
    <m-button outline class="mr-3" color="danger">danger</m-button>
  </div>

  <h2 class="text-xl font-bold my-4">outline disabled</h2>
  <div class="">
    <m-button outline disabled class="mr-3">default</m-button>
    <m-button outline disabled class="mr-3" color="primary">primary</m-button>
    <m-button outline disabled class="mr-3" color="success">success</m-button>
    <m-button outline disabled class="mr-3" color="info">info</m-button>
    <m-button outline disabled class="mr-3" color="warning">warning</m-button>
    <m-button outline disabled class="mr-3" color="danger">danger</m-button>
  </div>
</template>
<script setup lang="ts">
import MButton from "./components/basic/MButton.vue";
</script>
