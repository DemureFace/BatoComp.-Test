<script setup>
import { defineProps, defineEmits } from "vue";

defineEmits(["click"]);

const props = defineProps({
  tag: {
    type: String,
    default: "button",
  },
  path: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  click: {
    type: String,
    default: "",
  },
  textClasess: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <component
    :class="{
      ' underline hover:no-underline': tag === 'a',
    }"
    :is="tag"
    :to="{ name: path }"
    :href="link"
    @click="$emit('click')"
  >
    <span :class="textClasess">
      <slot name="default"></slot>
    </span>
  </component>
</template>
