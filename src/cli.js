#!/usr/bin/env node

const manage = require("./manage-md"); //calculoStats
const md = require("./md"); //msLinks

//  Declaracion de las opciones ingresadas en CLI
const [, , ...args] = process.argv;

// Declaracion de variables usadas en las funciones 
const ruta = args[0];
const validate = args.indexOf("--validate") > -1;
const statsExiste = args.indexOf("--stats") > -1;

// Si no se ingresa la opcion de --stats...
if (!statsExiste) {
  md.mdLinks(ruta, validate)   //Ejecuta la función mdLinks
    .then((response) =>{        // ****** Si se consume en resolución...  
      response.forEach((obj) => {  // para cada elemento de las ligas...
        if (validate) {            //si se incluyó la opción  --validate, imprime imprime una estructura de información
          console.log(obj.file, obj.href, obj.ok, obj.status, obj.text.slice(0,50));
        } else {                   //si no se incluye en las opciones
          console.log(obj.file, obj.href, obj.text.slice(0,50));
        }
      })
    })
    .catch((err) => console.log(err));   // ****** Si se consume en rechazo, muestra el error

// Si sí se ingresa la opcion de --stats...
} else {
  md.mdLinks(ruta, validate)
    .then((response) => {       // ****** Si se consume en resolución... 
      console.log(manage.calculoStats(response, validate));  // hace el cálculo de las estadísticas
    })
    .catch((err) => console.log(err));   // ****** Si se consume en rechazo, muestra el error
}
