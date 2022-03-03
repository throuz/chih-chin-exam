<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Double Count: {{ doubleCount }}</h1>
    <button @click="asyncIncrement">Add Double Count</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      asyncIncrement: () => store.dispatch("asyncIncrement"),
      doubleCount: computed(() => store.getters.doubleCount),
    };
  },
};
</script>
