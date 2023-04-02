<script setup lang="ts">
  import { ref } from 'vue'
</script>

<template>
  <h1 class="font-bold underline ">Simon</h1>
  <div class="container mx-auto">
    <div class="targets target-left"></div>
    <div class="targets target-right"></div>
    <div class="targets target-up"></div>
    <div class="targets target-bottom"></div>
    
  </div>
  <div class="card">
    <div class="">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p class="">
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>
  
    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.targets{
  width: 50px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid black;
}
</style>
