const manage = require("./manage-md");
const validatePath = require("./validate");

const mdLinks = (ruta, validate = false) => {
  ruta = validatePath.transformaRuta(ruta);
  //console.log(ruta);
  return new Promise((resolve, reject) => {
    if (!validatePath.Extension(ruta) || !validatePath.existeRuta(ruta)) {
      if (!validatePath.Extension(ruta)) {
        reject(new Error("No es Markdown"));
      } else if (!validatePath.existeRuta(ruta)) {
        reject(new Error("Ruta invalida"));
      }
    }

    //reject ('Ruta invalida')}

    if (validatePath.Extension(ruta) && validatePath.existeRuta(ruta)) {
      manage
        .leeMD(ruta)
        .then((ligas) => {
          //console.log(validate)
          if (!validate) {
            resolve(ligas);
          } else {
            //console.log('fun leeMD');
            //console.log('##########s');
            resolve(manage.validacionLigas(ligas).then((res) => res));
          }
        })
        .catch(() => reject(new Error("No se pudo leer")));
      //return ligas;
    }
  });
};

module.exports = { mdLinks };
