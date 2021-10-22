<template>
  <NuxtLayout name="custom">
    <template #header>Counter</template>
    <Counter />
  </NuxtLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  layout: false,
});
</script>
