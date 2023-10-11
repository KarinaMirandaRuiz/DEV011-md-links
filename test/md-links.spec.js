const manipulate = require('../src/cli');

//Test para función mdLinks que lee MD 
describe('Validación de función mdLinks', () => {
  //Cuando la ruta no existe
  
  it('Debería de rechazar la promesa si es un archivo de MD que no existe', () => {
    //console.log(manipulate.mdLinks('morcin_copy2.md').rejects);
    return expect(manipulate.mdLinks('morcin_copy2.md')).rejects.toBe('Ruta invalida');
  });   
  
  //Cuando la ruta no existe
  it('Debería de rechazar la promesa si tiene una extención diferente o archivo no existe', () => {
    return expect(manipulate.mdLinks('morcin.txt')).rejects.toBe('Ruta invalida');
  });  
  
  //Cuando el archivo tiene una extención diferente
  it('Debería de rechazar la promesa si tiene una extención diferente', () => {
    return expect(manipulate.mdLinks('morcin_copy.txt')).rejects.toBe('Ruta invalida');
  });

  //Cuando la ruta sí existe
  const ObjectExpectedRelativeTrue = [
    {
      href: 'https://www.bbc.com/newsadfgafgfg',
      text: 'BBC',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md',
      status: 404,
      ok: 'fail'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Trainspotting',
      text: 'meat_consumption.csv',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md',
      status: 200,
      ok: 'ok'
    },
    {
      href: 'https://www.gov.scot/publications/national-drugs-mission-plan-2022-2026/pages/3/',        
      text: 'aquí',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md',       
      status: 200,
      ok: 'ok'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Trainspotting',
      text: '',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md',       
      status: 200,
      ok: 'ok'
    }
  ];
  
  const ObjectExpectedRelativeFalse = [
    {
      href: 'https://www.bbc.com/newsadfgafgfg',
      text: 'BBC',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md',
    },
    {
      href: 'https://es.wikipedia.org/wiki/Trainspotting',
      text: 'meat_consumption.csv',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md',
    },
    {
      href: 'https://www.gov.scot/publications/national-drugs-mission-plan-2022-2026/pages/3/',        
      text: 'aquí',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md',       
    },
    {
      href: 'https://es.wikipedia.org/wiki/Trainspotting',
      text: '',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md',       
    }
  ];

  const ObjectExpectedAbsoluteFalse = [
    {
      href: 'https://www.bbc.com/newsadfgafgfg',
      text: 'BBC',
      file: 'C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/morcin_copy.md',
    },
    {
      href: 'https://experiencia21.tec.mx/courses/352034/files/137949181?module_item',
      text: 'meat_consumption.csv',
      file: 'C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/morcin_copy.md',
    },
    {
      href: 'https://www.gov.scot/publications/national-drugs-mission-plan-2022-2026/pages/3/',        
      text: 'aquí',
      file: 'C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/morcin_copy.md',
    },
    {
      href: 'https://es.wikipedia.org/wiki/Trainspotting',
      text: '',
      file: 'C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/morcin_copy.md',
    }
  ];


  //Ruta absoluta
  it('Archivo existente con ruta absoluta sin parámetro de validación', () => {
    return expect(manipulate.mdLinks('C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/morcin_copy.md')).resolves.toMatchObject(ObjectExpectedAbsoluteFalse);
  });

  //Ruta relativa y validación True
  it('Archivo existente con ruta relativa y valida status de links', () => {
    return expect(manipulate.mdLinks('morcin.md',true)).resolves.toMatchObject(ObjectExpectedRelativeTrue);
  });   
  
  //Ruta relativa y validación False
  it('Archivo existente con ruta relativa sin validación de links', () => {
    return expect(manipulate.mdLinks('morcin.md',false)).resolves.toMatchObject(ObjectExpectedRelativeFalse);
  });  

});

