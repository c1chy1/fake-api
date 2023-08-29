
<template>

  <component
      class="text-gray-900 font-bold"
      :href="props.href"
      v-if="props.title"
      :is="tag || 'h3'"
      :class="[

      textSize === 'big'   ? 'text-xl' :
      textSize === 'medium'   ? 'text-base' :
      textSize === 'low'   ? 'text-xs' :
      textDirection === 'left'   ? 'text-left' :
      textDirection === 'center' ? 'text-center' :
      textDirection === 'right'  ? 'text-right' : '']"
  >{{ props.title }}
    <slot></slot>

  </component>
</template>
<script setup lang="ts">

import {toRefs} from "vue";

const props = defineProps<{
  tag?: string;
  title: string;
  textDirection: 'left' | 'right' | "center"
  textSize: 'big' | 'medium' | "low"
  href?: any
}>();

const {tag} = toRefs(props);


</script>
