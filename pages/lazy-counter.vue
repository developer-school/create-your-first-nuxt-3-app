<template>
  <LazyCounter v-if="showCounter" />
  <div class="flex items-center justify-center h-screen" v-else>Loading...</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  layout: "custom",
  setup() {
    const showCounter = ref(false);

    setTimeout(() => {
      showCounter.value = true;
    }, 3000);

    return {
      showCounter,
    };
  },
});
</script>
