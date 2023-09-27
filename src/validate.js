const path = require('node:path')
const fs = require ('node:fs')

//Función que valida si el archivo es markdown
exports.Extension = (ruta) => {
    const extencionesValidas = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
    if (extencionesValidas.includes(path.extname(ruta))){
        return true;
    }
    return false;
}

// Función que valida si la ruta es absoluta o relativa
exports.Ruta = (ruta) => {
    // condicional para encontrar rutas relativas
    if (!/:|\/\//.test(ruta) && /[a-zA-Z/.]/.test(ruta[0])){  /*/* !ruta.includes('//') && ruta[0]==='/' || ruta[0]==='.' || */
        //console.log(ruta.includes(':'));
        ruta = path.join(process.cwd(),ruta);
    }
    return ruta
}

//Función que valida si el archivo existe
exports.Existe = (ruta) => {
    return fs.existsSync(ruta);
}
