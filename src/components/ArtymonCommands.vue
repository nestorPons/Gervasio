<script>
import artyom from "artyom.js";
// Add a single command
let comandoHola = {
  indexes: ["Hola", "buenos días", "holita"], // Decir alguna de estas palabras activara el comando
  action: function () {
    // Acción a ejecutar cuando alguna palabra de los indices es reconocida
    artyom.say("Hola! como estás hoy?");
  },
};
artyom.addCommands(comandoHola); // Agregar comando

// Or add multiple commands at time
let myGroup = [
  {
    description:
      "Si mi base de datos contiene alguno del nombre dicho, hacer algo",
    smart: true, // Activar comando como un comando smart para poder usar comodines
    indexes: ["Sabes quien es *", "No se quien  *", "Es * una buena persona"],
    // Ejecutar acción
    // i continene el indice que coincide con lo dicho en el array
    action: function (i, wildcard) {
      let database = ["Carlos", "Bruce", "David", "Joseph", "Kenny"];

      //Si lo dicho, coincide con la tercera propiedad de los indices
      //es decir, "Es xxx una buena persona", haga X, de lo contrario Y
      if (i == 2) {
        if (database.indexOf(wildcard.trim())) {
          artyom.say("Soy una máquina, nisiquiera se que es un sentimiento.");
        } else {
          artyom.say(
            "No se quien es " +
              wildcard +
              " y no se como demonios podría decir si es una buena persona o no."
          );
        }
      } else {
        if (database.indexOf(wildcard.trim())) {
          artyom.say(
            "Por supuesto que se quien es " +
              wildcard +
              ". Una muy buena persona a mi parecer."
          );
        } else {
          artyom.say(
            "Mi base de datos no es lo suficientemente amplia, no se quien es " +
              wildcard
          );
        }
      }
    },
  },
  {
    indexes: ["Que hora es", "Es muy tarde"],
    action: function (i) {
      if (i == 0) {
        UnaFuncionQueDiceElTiempo(new Date());
      } else if (i == 1) {
        artyom.say("Nunca es tarde para hacer algo mi amigo!");
      }
    },
  },
];

artyom.addCommands(myGroup);
</script>
<template></template>
<style></style>
