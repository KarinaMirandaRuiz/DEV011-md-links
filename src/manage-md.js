const fs = require('node:fs/promises')

exports.leerMD = (ruta) => {
    return fs.readFile(ruta, 'utf-8').then(text => console.log(text))
}
