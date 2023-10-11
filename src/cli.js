#!/usr/bin/env node

//const validate = require('./validate')
//const fs = require ('node:fs');
//const { type } = require('node:os');
//const markdownIt  = require('markdown-it');
//const { log } = require('node:console');
//const path = require('node:path')

const manage =require('./manage-md')
const validatePath = require('./validate')


const [,,...args] = process.argv;


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

//console.log(args);

const ruta = args[0]

const validate = args.indexOf('--validate') > -1

const statsExiste = args.indexOf('--stats') > -1

if (!statsExiste){
  mdLinks(ruta,validate)
    .then(response =>response.forEach(obj => {
      if (validate){
        console.log(obj.file, obj.href, obj.ok, obj.status, obj.text);
      } else {
        console.log(obj.file, obj.href, obj.text);
      }
    }))
    .catch(err=>console.log(err));
} else {
  mdLinks(ruta,validate)
    .then((response) =>{
      console.log(manage.calculoStats(response,validate))
    })
    .catch(err=>console.log(err))
}

module.exports = { mdLinks };

//this.mdLinks('morcin.md',true).then(res => console.log('mdlinks index-----',res)).catch(err => console.log(err)); 
//const mdstr3 = manage.mdLinks('morcin.md',true)
//console.log(mdstr3).then (res => console.log(res))


