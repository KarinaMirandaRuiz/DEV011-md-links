const fs = require('node:fs/promises')
const markdownIt  = require('markdown-it');
 
exports.leerMD = (ruta) => {
    return fs.readFile(ruta, 'utf-8').then(text => {
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
        console.log(linksMD);
        return linksMD;
    });
}
