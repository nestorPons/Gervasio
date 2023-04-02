<script setup>
import Artyom from "./components/Artyom.vue";
import LangChain from "./components/LangChain.vue";
</script>
<script>
export default {
  components: {
    Artyom,
    LangChain,
  },
  data() {
    return {
      sendingMessage: "Aqui mensaje",
    };
  },
  methods: {
    sendMessage(mens) {
      this.sendingMessage = mens;
    },
  },
};
</script>
<template>
  <div class="container mx-auto">
    <h1>Gervasio</h1>
    <Artyom @send-message="sendMessage" ref="coreComponent" />
    <lang-chain :message="sendingMessage"></lang-chain>
  </div>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
