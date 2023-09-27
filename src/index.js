const validate = require('./validate')
const manage =require('./manage-md')
const fs = require ('node:fs')

/* console.log(validate.Extension('Maya2.md'))
console.log(validate.Ruta('Maya.md'))
console.log(validate.Ruta("C:/Users/gatic/Documents/Bootcamp/Proyecto1/DEV011-text-analyzer-main - copia/README.md"))
console.log(validate.Ruta('https://github.com/KarinaMirandaRuiz/DEV011-md-links/blob/main/docs/01-milestone.md'))
console.log(validate.Extension('https://github.com/KarinaMirandaRuiz/DEV011-md-links/blob/main/docs/01-milestone.md')) 
console.log(validate.Existe('Maya.md'))
console.log(validate.Existe("C:/Users/gatic/Documents/Bootcamp/Proyecto1/DEV011-text-analyzer-main - copia/README.md")) */
console.log(manage.leerMD("C:/Users/gatic/Documents/Bootcamp/Proyecto1/Maya.md"))























/* 
import { rejects } from 'node:assert';
import { promises } from 'node:fs';
import fs from 'node:fs/promises';
import path, { resolve } from 'node:path'; */

/* const fs = require('node:fs/promises')
const path = require('node:path')


/* const archivo =  
fs.readFile('README.md', 'utf-8').then(text => console.log(text)) */

/* fs.readFile('maya.md', 'utf-8').then(text => console.log(text)).catch(console.log('Error')) */
//fs.readFile('README.md', 'utf-8', (err, text)=>{
/*     if (err){
        console.log('error');
        return;
    } */
//    console.log(text)})


//const ext = path.extname('README.md')

//const extencionesValidas= ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text']
/* 
if (ext in extencionesValidas){
    console.log('Es una extención válida')
}else{
    console.log('no es valido')
}
 */

/* const extencionPromise = new Promise((resolve, rejects)=>{

    if (ext in extencionesValidas){
        resolve('Es una extención válida')
    }else{
        rejects('no es valido')
    }
})

console.log(extencionPromise) */

/* process.argv Comandos para la terminal */







 
