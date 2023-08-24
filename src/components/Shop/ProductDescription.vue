
<template>

  <component
      class="mt-2 text-gray-600"
      v-if="props.description"
      :is="tag || 'div'"
      :class="[

      textSize === 'big'   ? 'text-xl' :
      textSize === 'medium'   ? 'text-base' :
      textSize === 'low'   ? 'text-xs' :
      textDirection === 'left'   ? 'text-left' :
      textDirection === 'center' ? 'text-center' :
      textDirection === 'right'  ? 'text-right' : '']"
  >{{ props.description }}
    <slot></slot>

  </component>
</template>
<script setup lang="ts">

import {toRefs} from "vue";

const props = defineProps<{
  tag?: string;
  description: string;
  textSize: string;
  textDirection: 'left' | 'right' | "center"
}>();

const {tag} = toRefs(props);


</script>

<style scoped>

</style>