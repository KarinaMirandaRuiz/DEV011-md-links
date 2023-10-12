const fs = require("node:fs/promises");
const markdownIt = require("markdown-it");


/*............Función para leer archivo MD, retorna array de objetos de ligas............*/
const leeMD = (ruta) => {
  //***** Se declara la promesa que se va a devolver por la función leerMD
  return new Promise((resolve, reject) => {
    //Uso de función asincrona readFile
    return (
      fs.readFile(ruta, "utf-8")
        //Si se resuelve leyendo el archivo, la nueva promesa se resuelve extrayendo los links
        .then((text) => {        // ****** Si readFile se consume en resolución...  
          const md = new markdownIt();   // Se declara una nueva instancia de MarkdownIt
          const tokens = md.parseInline(text, {})[0].children;  // Se generan el array de los elementos del markdown
          let linksMD = [];   //Se declara un array vacio linksMD, para guardar los links
          for (let i = 0; i < tokens.length; i++) {   //Se recorre el array de elementos
            if (tokens[i].type === "link_open") {   //...si el elemento es tipo link
              linksMD.push({      //...se guarda el objeto en el array linksMD
                href: tokens[i].attrs[0][1],   //url
                text: tokens[i + 1].content,   //Testo que contienen la url
                file: ruta,                    //ruta del archivo MD que es está analizando
              });
            }
          }
          //***** Se define como se va a resolver la promesa definida al inicio (linea 7)
          resolve(linksMD);  
        })
        //***** Si readFile se consume en rechazo, la promesa definida al inicio (linea 7) de rechazará con error
        .catch(() => reject(new Error("No se pudo leer el archivo")))   
    );
  });
};


/*............Función para validar las ligas existentes en el archivo MD............*/
const validacionLigas = (ligas) => {
  const ligasValidadas = ligas.map((objLigaOriginal) => {   // de declara el loop map para recorrer el arrar de ligas
    const objLiga = { ...objLigaOriginal };    //se crea un clon de cada objeto de las ligas
    return fetch(objLiga.href)     //se valida el link mediante la promesa fetch
    .then((response) => {     //***** Si la promesa se consume con resolución...  
      objLiga.status = response.status;     //se guarda el código del estado
      if (response.ok) {     //se guarta el estado
        objLiga.ok = "ok";
      } else {
        objLiga.ok = "fail";
      }
      return objLiga;     //se retorna el nuevo objeto de cada liga
    });
  });
  return Promise.all(ligasValidadas);   //se garantiza que las promesas aplicadas a TODAS las ligas se cumplan 
};


/*............Función para calcular las estadísticas............*/
const calculoStats = (ligasMD, validate) => {
  //Se declaran las primeras variables necesarias 
  const ligasArray = [...ligasMD];    //Se clona lo que se pare como argumento
  const ligas = ligasArray.map((liga) => liga.href);   //Se extraen sólo las url dentro de un array
  const ligasUnicas = [...new Set(ligas)].length;   //se toman los elementos únicos de todos los url, y se contabiliza
  
  //si NO se pasa el argumento de validate...
  if (!validate) {  
    return "Ligas: " + ligas.length + "\nLigas unicas: " + ligasUnicas;    //se regresa sólo el conteo de ligas y ligas unicas
  // si SÍ se pasa el argumento validate...
  } else {
    const status = ligasArray.map((liga) => liga.status);  //se extraen los status de las ligas   
    // Se cuentan cada uno de los grupos de los códigos
    const informativos = status.filter((code) => code < 200).length;   
    const redireccionados = status.filter((code) => code > 299 && code < 400).length;
    const rotos = status.filter((code) => code > 399 && code < 500).length;
    const errorServidor = status.filter((code) => code > 499 && code < 600).length;
    return (
      "Ligas: " +
      ligas.length +
      "\nLigas unicas: " +
      ligasUnicas +
      "\nInformativos: " +
      informativos +
      "\nRedireccionados: " +
      redireccionados +
      "\nRotos: " +
      rotos +
      "\nError de servidor: " +
      errorServidor
    );
  }
};


module.exports = { validacionLigas, leeMD, calculoStats };
