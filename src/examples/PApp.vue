<template>
  <div>
    <Hermano1 @mensaje-enviado="transmitirMensaje"></Hermano1>
    <Hermano2 :mensaje="mensajeTransmitido"></Hermano2>
  </div>
</template>

<script>
import Hermano1 from './Hermano1.vue'
import Hermano2 from './Hermano2.vue'

export default {
  components: {
    Hermano1,
    Hermano2
  },
  data() {
    return {
      mensajeTransmitido: ''
    }
  },
  methods: {
    transmitirMensaje(mensaje) {
      this.mensajeTransmitido = mensaje
    }
  }
}
</script>
