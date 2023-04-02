<script>
import Artyom from "artyom.js";
import { getCurrentInstance } from "vue";
import Commands from "../js/Commands.js";
const artyom = new Artyom();
const cmd = [
      {
        indexes: ["hola"],
        action: function () {
          const mens = "Que pasa nen";
          artyom.say("¿Que pasa nen?");
          vm.changeMessage(mens);
        },
      },
      {
        indexes: ["escribe", "apunta"],
        action: function () {
          console.log(mens);
        },
      },
      {
        indexes: ["ves a la izquierda"],
        action: function () {
          vm.setActive("izquierda");
          commands.command1();
        },
      },
      {
        indexes: ["la derecha"],
        action: function () {
          vm.setActive("derecha");
        },
      },
      {
        indexes: ["abajo"],
        action: function () {
          vm.setActive("abajo");
        },
      },
      {
        indexes: ["arriba"],
        action: function () {
          vm.setActive("arriba");
        },
      },
      // Otros comandos aquí...
    ];
    artyom.addCommands(cmd);
// it work automatically without user interaction later... thanks google .i.
const commands = new Commands();
const core = {
  data() {
    return {
      menssage: "",
    };
  },
  methods: {
    changeMessage(mens) {
      this.menssage = mens;
    },
    sendMessage(message) {
      this.$emit("send-message", message);
    },
  },
  setup(props, context) {
    const vm = getCurrentInstance().proxy; // Obtiene la instancia actual de Vue

  
    artyom
      .initialize({
        lang: "es-ES", // GreatBritain english
        continuous: false, // Listen forever
        soundex: true, // Use the soundex algorithm to increase accuracy
        debug: true, // Show messages in the console
        executionKeyword: "and do it now",
        listen: true, // Start to listen commands !
        speed: 1.2,

        // If providen, you can only trigger a command if you say its name
        // e.g to trigger Good Morning, you need to say "Jarvis Good Morning"
        name: "Gervasio",
      })
      .then(() => {
        console.log("Artyom has been succesfully initialized");
        artyom.say("hola");

      })
      .catch((err) => {
        console.error("Artyom couldn't be initialized: ", err);
      });
  },
};

export default core;
</script>

<template>
  <div class="container">
    <input v-model="menssage" placeholder="edíteme" />
    <p>El mensaje es: {{ menssage }}</p>
    <input
      class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      id="btn"
      type="button"
      @click="sendMessage('Mensaje de prueba')"
      value="Click to send"
    />
  </div>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  padding: 2px;
  margin: 5px auto;
  border: 1px solid black;
}
p {
  margin: 10px;
  padding: 30px;
  background-color: red;
  color: black;
}
</style>
