<template>
  <div class="child-test">
    <h1>Props + Vuex: {{ msg }}</h1>
    <button @click="decrement">Reduce Double Count(child)</button>
    <h1>Provide + Inject: {{ message }}</h1>
    <button @click="addMessage">Add Message(child)</button>
  </div>
</template>

<script>
import { inject } from "vue";
import { useStore } from "vuex";

export default {
  name: "ChildTest",
  props: {
    msg: Number,
  },
  setup() {
    const store = useStore();
    const message = inject("message");
    const addMessage = () => {
      message.value += "Child";
    };

    return {
      decrement: () => store.commit("decrement"),
      message,
      addMessage,
    };
  },
};
</script>
