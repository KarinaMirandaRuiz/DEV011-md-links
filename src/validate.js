const path = require("node:path");
const fs = require("node:fs");

/*............Función que valida si el archivo es markdown............*/
exports.Extension = (ruta) => {
  const extencionesValidas = [
    ".md",
    ".mkd",
    ".mdwn",
    ".mdown",
    ".mdtxt",
    ".mdtext",
    ".markdown",
    ".text",
  ];
  //si la extención del archivo es tipo MD y está incluida en las extenciones validas...
  if (extencionesValidas.includes(path.extname(ruta))) {   
    return true;
  }
  return false;
};

/*............Función que valida si la ruta es absoluta o relativa............*/
exports.transformaRuta = (ruta) => {
  // condicional para encontrar rutas relativas
  if (!/:|\/\//.test(ruta) && /[a-zA-Z/.]/.test(ruta[0])) {
    /*/* !ruta.includes('//') && ruta[0]==='/' || ruta[0]==='.' || */
    //ruta = path.join(process.cwd(),ruta);
    ruta = path.normalize(path.resolve(__dirname, ruta));   //se genera la ruta absoluta
    ruta = ruta.toString().replace("\\\\", "\\");          //se limpian posibles // duplicados
  }
  return ruta;
};

/*............Función que valida si el archivo existe............*/
exports.existeRuta = (ruta) => {
  return fs.existsSync(ruta);
};
