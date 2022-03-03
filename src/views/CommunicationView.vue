<template>
  <div class="communication">
    <button @click="asyncIncrement">Add Double Count(parent)</button>
    <ChildTest :msg="doubleCount" />
    <button @click="addMessage">Add Message(parent)</button>
  </div>
</template>

<script>
import { computed, ref, provide } from "vue";
import { useStore } from "vuex";
import ChildTest from "@/components/ChildTest.vue";

export default {
  name: "CommunicationView",
  components: {
    ChildTest,
  },
  setup() {
    const store = useStore();

    const message = ref("hello!");
    provide("message", message);
    const addMessage = () => {
      message.value += "Parent";
    };

    return {
      asyncIncrement: () => store.dispatch("asyncIncrement"),
      doubleCount: computed(() => store.getters.doubleCount),
      addMessage,
    };
  },
};
</script>
