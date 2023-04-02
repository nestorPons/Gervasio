<template>
    <div>
      <button @click="enviarMensaje">Enviar mensaje</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      enviarMensaje() {
        this.$emit('mensaje-enviado', 'Hola desde Hermano3')
      }
    }
  }
  </script>
  