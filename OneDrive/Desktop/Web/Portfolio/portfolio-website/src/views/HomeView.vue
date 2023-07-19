<script setup>
import { ref } from "vue";

import homeData from "@/database/homeData.json";

import BaseButton from "@/components/base/BaseButton.vue";

const titleInfo = ref(homeData?.homeInfo || []);
const socialMedia = ref(homeData?.socialMedia || []);
const circleInfo = ref(homeData?.circleInfo || []);

const cvUrl = ref("@/assets/cv/CV.pdf");
const cv = ref("CV.pdf");
</script>

<template>
  <section class="flex items-center">
    <div class="max-w-[50rem]">
      <h3 class="text-[3.2rem] font-bold leading-[.3]">
        {{ titleInfo[0].title }}
      </h3>
      <h1 class="text-[5.6rem] font-bold mb-[.3rem]">{{ titleInfo[0].bio }}</h1>
      <p class="text-[1.6rem]">{{ titleInfo[0].description }}</p>

      <div class="">
        <BaseButton
          v-for="social in socialMedia"
          :key="social"
          tag="a"
          :link="social.link"
          textClasess="inline-flex justify-center items-center w-16 h-16 bg-transparent border-[.2rem] text-[2rem] text-primary hover:bg-primary hover:text-bg border-primary rounded-full shadow-social my-10 mx-6 mb-12 ml-0 transition-all duration-500"
        >
          <i :class="'bx bxl-' + social.name" class=""></i>
        </BaseButton>
      </div>

      <BaseButton
        tag="a"
        :link="cvUrl"
        :download="cv"
        class="inline-block py-[1.2rem] px-[2.8rem] bg-primary rounded-[.6rem] border-[.2rem] border-transparent shadow-social text-[1.6rem] text-bg tracking-[.1rem] font-semibold no-underline hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-500"
      >
        Download CV
      </BaseButton>

      <div
        class="absolute top-1/2 right-0 -translate-y-2/4 w-[975px] h-[975px] overflow-hidden pointer-events-none"
      >
        <div
          class="absolute top-0 right-0 w-full h-full rounded-full flex justify-center items-center"
        >
          <div
            v-for="circle in circleInfo"
            :key="circle"
            class="absolute left-0 flex items-center flex-col text-primary circle-transform origin-[487.5px] bg-bg py-[13px]"
            :style="{ '--i': circle.i }"
          >
            <i :class="'bx bx-' + circle.icon" class="text-[3.8rem] mr-12"></i>
            <h3 class="text-[3.2rem] leading-none font-semibold">
              {{ circle.title }}
            </h3>
          </div>
          <div
            class="w-[767px] h-[767px] border-[3px] border-primary rounded-full"
          ></div>
        </div>
        <div
          class="absolute top-0 right-0 w-0 h-0 border-t-[488px] border-r-[488px] border-b-[488px] border-primary border-l-[488px] border-l-transparent"
        ></div>
      </div>
    </div>
  </section>
</template>
