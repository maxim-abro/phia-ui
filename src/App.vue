<template>
  <div class="container mx-auto py-40">
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

    <h2 class="text-3xl font-bold my-8">checkbox</h2>
    <h3 class="text-xl font-bold my-4">default</h3>
    <div class="">
      <MCheckbox name="max" v-model="answer" :checked="answer" label="max" />
      <MCheckbox v-model="answer" name="mariya" label="Mariya" />
      {{ answer }}
    </div>

    <h2 class="text-3xl font-bold my-8">input</h2>
    <h3 class="text-xl font-bold my-4">default</h3>
    <div class="">
      <m-input />
    </div>

    <h3 class="text-xl font-bold my-4">clearable</h3>
    <div class="">
      <m-input clearable />
    </div>

    <h3 class="text-xl font-bold my-4">showPass</h3>
    <div class="">
      <m-input type="password" show-password />
    </div>

    <h2 class="text-3xl font-bold my-8">input number</h2>
    <h3 class="text-xl font-bold my-4">default</h3>
    <div class="">
      <input-number />
      <input-number :steps="5" />
      <input-number :min="-5" :max="5" />
      <input-number disabled :min="-5" :max="5" />
    </div>

    <h2 class="text-3xl font-bold my-8">three</h2>
    <h3 class="text-xl font-bold my-4">default</h3>
    <div class="">
      <m-three :data="three" />
    </div>

    <h2 class="text-3xl font-bold my-8">progress</h2>
    <h3 class="text-xl font-bold my-4">default</h3>
    <div class="">
      <m-progress class="mb-4" :percentage="35" />
      <m-progress class="mb-4" :percentage="35" status="success" />
      <m-progress class="mb-4" :percentage="35" status="exception" />
      <m-progress class="mb-4" :percentage="35" status="warning" />
      <m-progress class="mb-4" :percentage="35" status="success" text-inside />
    </div>

    <h2 class="text-3xl font-bold my-8">tag</h2>
    <h3 class="text-xl font-bold my-4">default</h3>
    <div class="">
      <m-tag class="mr-3">primary</m-tag>
      <m-tag class="mr-3" type="success">success</m-tag>
      <m-tag class="mr-3" type="info">info</m-tag>
      <m-tag class="mr-3" type="warning">warning</m-tag>
      <m-tag class="mr-3" type="danger">danger</m-tag>
    </div>
    <h3 class="text-xl font-bold my-4">closable</h3>
    <div class="">
      <m-tag closable @close="test" class="mr-3">primary</m-tag>
      <m-tag closable @close="test" class="mr-3" type="success">success</m-tag>
      <m-tag closable @close="test" class="mr-3" type="info">info</m-tag>
      <m-tag closable @close="test" class="mr-3" type="warning">warning</m-tag>
      <m-tag closable @close="test" class="mr-3" type="danger">danger</m-tag>
    </div>

    <h2 class="text-3xl font-bold my-8">badge</h2>
    <h3 class="text-xl font-bold my-4">default</h3>
    <div class="">
      <m-badge class="mr-10" :value="33" :max="99">
        <m-button color="success">button</m-button>
      </m-badge>
      <m-badge class="mr-10" type="success" :value="1" :max="99">
        <m-button color="success">button</m-button>
      </m-badge>
      <m-badge class="mr-10" type="info" :value="33" :max="99">
        <m-button color="success">button</m-button>
      </m-badge>
      <m-badge class="mr-10" type="warning" :value="33" :max="99">
        <m-button color="success">button</m-button>
      </m-badge>
      <m-badge class="mr-10" type="danger" :value="110" :max="99">
        <m-button color="success">button</m-button>
      </m-badge>
    </div>

    <h3 class="text-xl font-bold my-4">dot</h3>
    <div class="">
      <m-badge is-dot class="mr-10" :value="33" :max="99">
        <m-button color="success">button</m-button>
      </m-badge>
      <m-badge is-dot class="mr-10" type="success" :value="33" :max="99">
        <m-button color="success">button</m-button>
      </m-badge>
      <m-badge is-dot class="mr-10" type="info" :value="33" :max="99">
        <m-button color="success">button</m-button>
      </m-badge>
      <m-badge is-dot class="mr-10" type="warning" :value="33" :max="99">
        <m-button color="success">button</m-button>
      </m-badge>
      <m-badge is-dot class="mr-10" type="danger" :value="33" :max="99">
        <m-button color="success">button</m-button>
      </m-badge>
    </div>

    <h2 class="text-3xl font-bold my-8">switch</h2>
    <h3 class="text-xl font-bold my-4">default</h3>
    <div class="">
      <m-switch>switch</m-switch>
    </div>
  </div>
</template>
<script setup lang="ts">
import MButton from './components/basic/MButton.vue'
import MLink from './components/basic/MLink.vue'
import { ref } from 'vue'
import MCheckbox from './components/form/MCheckbox.vue'
import MInput from '@/components/form/MInput.vue'
import InputNumber from '@/components/form/InputNumber.vue'
import MThree from '@/components/data/MThree.vue'
import MProgress from '@/components/data/MProgress.vue'
import MTag from '@/components/data/MTag.vue'
import MBadge from '@/components/data/MBadge.vue'
import MSwitch from '@/components/form/MSwitch.vue'

const answer = ref(true)

const three = ref({
  label: 'Лейбл',
  children: [
    {
      label: 'Лейбл',
      children: [
        {
          label: 'Лейбл',
          children: []
        },
        {
          label: 'Лейбл',
          children: []
        }
      ]
    },
    {
      label: 'Лейбл',
      children: []
    },
    {
      label: 'Лейбл',
      children: [
        {
          label: 'Лейбл',
          children: [
            {
              label: 'Лейбл',
              children: []
            },
            {
              label: 'Лейбл',
              children: []
            }
          ]
        }
      ]
    },
    {
      label: 'Лейбл',
      children: [
        {
          label: 'Лейбл',
          children: []
        },
        {
          label: 'Лейбл',
          children: [
            {
              label: 'Лейбл',
              children: [
                {
                  label: 'Лейбл',
                  children: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Лейбл',
      children: [
        {
          label: 'Лейбл',
          children: []
        },
        {
          label: 'Лейбл',
          children: []
        },
        {
          label: 'Лейбл',
          children: []
        },
        {
          label: 'Лейбл',
          children: [
            {
              label: 'Лейбл',
              children: []
            },
            {
              label: 'Лейбл',
              children: []
            },
            {
              label: 'Лейбл',
              children: []
            }
          ]
        },
        {
          label: 'Лейбл',
          children: []
        },
        {
          label: 'Лейбл',
          children: []
        }
      ]
    }
  ]
})

function test() {
  console.log('test')
}
</script>
