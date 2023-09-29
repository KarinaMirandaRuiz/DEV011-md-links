//const validate = require('./validate')
const manage =require('./manage-md')
//const fs = require ('node:fs');
//const markdownIt  = require('markdown-it');
//const path = require('node:path')


const mdstr3 = manage.mdLinks('morcin.md').then(res => console.log(typeof(res),res)); 



