<template>
  <Counter />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  layout: "custom",
  setup() {
    const counter = ref(0);

    return {
      counter,
    };
  },
});
</script>
