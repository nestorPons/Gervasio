<script>
import { OpenAI } from "langchain/llms";

export default {
  name: "langchain",
  props: {
    message: String,
  },
};
</script>
<template>
  <div id="b1">
    <h2>Componente LangChain</h2>
    <p>Mensaje: {{ message }}</p>
  </div>
</template>

<style scoped>
p {
  margin: 20px;
  padding: 20px;
  color: black;
  border: 1px solid;
}
</style>
