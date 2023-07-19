<script setup>
import { ref } from "vue";

import navigationsData from "@/database/navigationsData.json";

import BaseButton from "@/components/base/BaseButton.vue";

const navigations = ref(navigationsData?.navigations || []);
</script>

<template>
  <header class="fixed flex items-center top-0 left-0 w-full z-10">
    <BaseButton
      tag="router-link"
      path="home"
      class="mr-auto text-primary font-semibold text-4xl cursor-default"
    >
      Portfolio.
    </BaseButton>

    <nav class="">
      <BaseButton
        v-for="navigation in navigations"
        :key="navigation"
        tag="router-link"
        :path="navigation.path"
        class="navigation relative mr-14 text-bg font-medium text-3xl"
      >
        {{ navigation.title }}
      </BaseButton>
    </nav>

    <div class="bx bx-moon text-4xl text-bg cursor-pointer"></div>
  </header>
</template>
