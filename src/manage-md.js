const fs = require('node:fs/promises')
const markdownIt  = require('markdown-it');
const validate = require('./validate')
 
//Función para leer archivo MD
exports.mdLinks = (ruta) => {
    ruta = validate.transformaRuta(ruta);

    //Uso de función asincrona readFile
    //sí la validación y transformación de la ruta es correcta, resuelve leer el archivo
    if (validate.Extension(ruta) && validate.existeRuta(ruta)){

        return fs.readFile(ruta, 'utf-8')
        //Si se resuelve leyendo el arvhivo, la nueva promesa se resuelve extrayendo los links
        .then(text => {
        const md = new markdownIt();
        const tokens = md.parseInline(text,{})[0].children;
        let linksMD = [];
        for (let i = 0; i<tokens.length; i++ ){
            if (tokens[i].type === 'link_open'){
                linksMD.push({
                    'href':tokens[i].attrs[0][1],
                    'text':tokens[i+1].content,
                    'file':ruta
                });
            };
        };
        return linksMD;
        })
        //Si la primera promesa se resolvió con un error, la segunda promesa muestra ese error
        /* .catch((error) => {
            //console.log('Ruta invalida');
            return 'No se pudo leer el archivo';
        }) */
    }else{
        return 'Ruta invalida'
    };
}
