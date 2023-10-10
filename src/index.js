//const validate = require('./validate')
//const fs = require ('node:fs');
//const { type } = require('node:os');
//const markdownIt  = require('markdown-it');
//const { log } = require('node:console');
//const path = require('node:path')
const manage =require('./manage-md')
const validatePath = require('./validate')



const mdLinks = (ruta, validate = false) => {
  ruta = validatePath.transformaRuta(ruta);
  //console.log(ruta);
  return new Promise((resolve, reject) => {
  if (!validatePath.Extension(ruta) || !validatePath.existeRuta(ruta)){
    //reject (new Error ('Ruta invalida1111'))}
    reject ('Ruta invalida')}
  
  if (validatePath.Extension(ruta) && validatePath.existeRuta(ruta)){
    manage.leeMD(ruta)
    .then(ligas=>{
      //console.log(validate)
      if (!validate){
          resolve (ligas)
      } else {
        //console.log('fun leeMD');
        //console.log('##########s');
        resolve (manage.validacionLigas2(ligas).then(res => res))
      } 
    })
    .catch(() => reject(new Error('no se pudo leer')));
      //return ligas;
    }
  }) 
}

module.exports = { mdLinks };



//this.mdLinks('morcin.md',true).then(res => console.log('mdlinks index-----',res)).catch(err => console.log(err)); 
//const mdstr3 = manage.mdLinks('morcin.md',true)
//console.log(mdstr3).then (res => console.log(res))



//cli
































/*
 const mdstr2 = manage.leerMD("C:/Users/gatic/OneDrive/Escritorio/morcin.md").then(res => console.log('------------------------------\n',res));
const mdstr1 = manage.leerMD("C:/Users/gatic/OneDrive/Escritorio/morcin.txt").then(res => console.log('------------------------------\n',res));
*/

/* console.log(validate.Extension('Maya2.md'))
console.log(validate.Ruta('Maya.md'))
console.log(validate.Ruta("C:/Users/gatic/Documents/Bootcamp/Proyecto1/DEV011-text-analyzer-main - copia/README.md"))
console.log(validate.Ruta('https://github.com/KarinaMirandaRuiz/DEV011-md-links/blob/main/docs/01-milestone.md'))
console.log(validate.Extension('https://github.com/KarinaMirandaRuiz/DEV011-md-links/blob/main/docs/01-milestone.md')) 
console.log(validate.Existe('Maya.md'))
console.log(validate.Existe("C:/Users/gatic/Documents/Bootcamp/Proyecto1/DEV011-text-analyzer-main - copia/README.md")) */

//const mdstr = manage.leerMD("C:/Users/gatic/Documents/Bootcamp/Proyecto1/Maya.md");

/* 

//let mdstr='## 2. Preámbulo![Una lupa sobre texto de libro](https://github.com/Laboratoria/bootcamp/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)_Credito: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)__en [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_3. La aplicación debe permitir limpiar el contenido de la caja de texto haciendo clic en un botón.'
//const mdrender =markdownIt.render(mdstr)
//console.log(mdrender);
const md = new markdownIt();

console.log(md.parse(mdstr,{})[1].children[3].type==='link_open')

 */

/* const markdownIt = require('markdown-it');
const md = new markdownIt();

const markdownText = `
# Título

Este es un párrafo de ejemplo.

- Elemento de lista 1
- Elemento de lista 2

[Enlace a ejemplo](https://www.ejemplo.com)
`;

// Parsear el texto Markdown para obtener los tokens
const tokens = md.parse(markdownText, {});

// Imprimir los tokens en la consola
console.log(tokens[19].children[0].attrs);
 */
// Parsear el texto Markdown para obtener los tokens

// Iterar a través de los tokens para buscar enlaces
/* for (let i = 0; i < tokens.length; i++) {
  if (tokens[i].type === 'link_open') {
    // Si encontramos un token de apertura de enlace
    const linkOpenToken = tokens[i];
    const linkCloseToken = tokens[i + 2]; // El token de cierre sigue al de apertura

    if (linkOpenToken.tag === 'a' && linkCloseToken.type === 'link_close') {
      // Comprobamos si el token de apertura es un enlace 'a' y si el token de cierre es válido

      // Accedemos a los atributos del enlace
      const href = linkOpenToken.attrs.find(attr => attr[0] === 'href');

      // Imprimimos la URL del enlace
      console.log('URL del enlace:', href[1]);
    }
  }
}
 */












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







 
