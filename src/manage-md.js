const fs = require('node:fs/promises');
const markdownIt  = require('markdown-it');
const validatePath = require('./validate');
//const { rejects } = require('node:assert');

//Función para leer archivo MD
const leeMD = (ruta) => {
    return new Promise((resolve, reject) => {
        /* ruta = validatePath.transformaRuta(ruta); */

        //Uso de función asincrona readFile
        //sí la validación y transformación de la ruta es correcta, resuelve leer el archivo
       /*  if (validatePath.Extension(ruta) && validatePath.existeRuta(ruta)){ */
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
                resolve (linksMD);
            })
            .catch(()=>reject (new Error('No se pudo leer el archivo')))
            //Si la primera promesa se resolvió con un error, la segunda promesa muestra ese error
            /* .catch((error) => {
                //console.log('Ruta invalida');
                return 'No se pudo leer el archivo';
            }) */
        /* }
        else{
            reject ('Ruta invalida')
        }; */
    })

    
}


const validacionLigas2 = (ligas) => {
    const ligasValidadas = ligas.map(objLigaOriginal => {
        const objLiga = {...objLigaOriginal}
        return fetch(objLiga.href).then(response =>{
            //console.log(response);
            objLiga.status = response.status;
                if (response.ok){
                    objLiga.ok = 'ok'
                }else{
                    objLiga.ok = 'fail'
                }
                //console.log('fetch ----------------------',objLiga);
            return objLiga}
        )
    })
    return Promise.all(ligasValidadas);
}

const calculoStats = (ligasMD,validate) =>{
    const ligasArray = [...ligasMD];
    const ligas = ligasArray.map(liga=> liga.href);
    const ligasUnicas = [... new Set(ligas)].length;

    if (!validate){
        return ('Ligas: ' + ligas.length + '\nLigas unicas: ' + ligasUnicas);
    } else {  
        const status = ligasArray.map(liga=> liga.status);
        const informativos = status.filter(code => code < 200).length
        const redireccionados = status.filter(code => code > 299 && code < 400).length
        const rotos = status.filter(code => code > 399 && code < 500).length
        const errorServidor = status.filter(code => code > 499 && code < 600).length
        return ('Ligas: ' + ligas.length + '\nLigas unicas: ' + ligasUnicas + '\nInformativos: ' + informativos + '\nRedireccionados: ' + redireccionados + '\nRotos: ' + rotos + '\nError de servidor: ' + errorServidor);
    }
}


module.exports = { validacionLigas2, leeMD, calculoStats};