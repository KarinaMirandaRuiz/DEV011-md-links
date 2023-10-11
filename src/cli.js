#!/usr/bin/env node

const manage = require("./manage-md");
const md = require("./md");

const [, , ...args] = process.argv;

const ruta = args[0];
const validate = args.indexOf("--validate") > -1;
const statsExiste = args.indexOf("--stats") > -1;

if (!statsExiste) {
  md.mdLinks(ruta, validate)
    .then((response) =>
      response.forEach((obj) => {
        if (validate) {
          console.log(obj.file, obj.href, obj.ok, obj.status, obj.text.slice(0,50));
        } else {
          console.log(obj.file, obj.href, obj.text.slice(0,50));
        }
      })
    )
    .catch((err) => console.log(err));
} else {
  md.mdLinks(ruta, validate)
    .then((response) => {
      console.log(manage.calculoStats(response, validate));
    })
    .catch((err) => console.log(err));
}

//module.exports = { mdLinks };

//this.mdLinks('morcin.md',true).then(res => console.log('mdlinks index-----',res)).catch(err => console.log(err));
//const mdstr3 = manage.mdLinks('morcin.md',true)
//console.log(mdstr3).then (res => console.log(res))
