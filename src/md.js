const manage = require("./manage-md");
const validatePath = require("./validate");

/*............Función mdLink: revisa el archivo, lo lee y retorna el array correspondiente............*/
const mdLinks = (ruta, validate = false) => {
  ruta = validatePath.transformaRuta(ruta);  //Se convierte en una ruta absoluta
  //console.log(ruta);
  return new Promise((resolve, reject) => {   //se declar la promesa que se va a retornar
    if (!validatePath.Extension(ruta) || !validatePath.existeRuta(ruta)) {   //se valida si el archivo NO existe o si NO es MD
      if (!validatePath.Extension(ruta)) {   // si no es MD...
        reject(new Error("No es Markdown"));   //se sechaza con un Error 'No es Markdown'
      } else if (!validatePath.existeRuta(ruta)) {  //Si no Existe...
        reject(new Error("Ruta invalida"));   //Se rechaza como con el Error 'Ruta invalida'
      }
    }
    if (validatePath.Extension(ruta) && validatePath.existeRuta(ruta)) {  //Se vuelve a validar que la ruta cumpla las condiciones (Nota, marcaba error si no se validaba)
      manage.leeMD(ruta) //... se lee el MD
        //***** Si se consume como resolución...
        .then((ligas) => {
          if (!validate) {    //... y si NO se requiere la validación
            resolve(ligas);   //...la promesa inicial, se resuelve con las lugas sin validar
          } else {     //En caso contrario...
            resolve(manage.validacionLigas(ligas).then((res) => res));   //...la promesa inicial se resuelve con la validación de las ligas
          }
        })
        //***** Si leeMD se consume como rechazo... 
        .catch(() => reject(new Error("No se pudo leer")));  //La promesa inicial se resolverá como rechazo con un nuevo error
      //return ligas;
    }
  });
};

module.exports = { mdLinks };
