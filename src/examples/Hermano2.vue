<template>
    <div>
      <p>Mensaje transmitido desde Hermano1: {{ mensaje }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      mensaje: String
    }
  }
  </script>
  