const manipulate = require('../src/manage-md');

//Test para función mdLinks que lee MD 
describe('mdLinks', () => {
  //Cuando la ruta no existe
  it('Archivo con ruta invalida', () => {
    return expect(manipulate.mdLinks('morcin_copy2.md')).toBe('Ruta invalida');
  });   
  
  //Cuando la ruta no existe
  it('Archivo con ruta invalida', () => {
    return expect(manipulate.mdLinks('morcin.txt')).toBe('Ruta invalida');
  });  
  
  //Cuando el archivo tiene una extención diferente
  it('Archivo con ruta invalida', () => {
    return expect(manipulate.mdLinks('morcin_copy.txt')).toBe('Ruta invalida');
  });

  //Cuando la ruta sí existe
  const ObjectExpectedRelative = [
    {
      href: 'https://www.bbc.com/news/explainers-59232599',
      text: 'BBC',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md'
    },
    {
      href: 'https://experiencia21.tec.mx/courses/352034/files/137949181?module_item_id=22616836',
      text: 'meat_consumption.csv',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md'
    },
    {
      href: 'https://en.wikipedia.org/wiki/Refractive_index',
      text: 'índice refractivo',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md'
    },
    {
      href: 'https://experiencia21.tec.mx/courses/352034/files/138073590?module_item_id=22624552',
      text: 'refractive_index.csv',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md'
    },
    {
      href: 'https://www.gov.scot/publications/national-drugs-mission-plan-2022-2026/pages/3/',
      text: 'aquí',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Trainspotting',
      text: '',
      file: 'C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md'
    }
  ];
  
  const ObjectExpectedAbsolute = [
  {
    href: 'https://www.bbc.com/news/explainers-59232599',
    text: 'BBC',
    file: 'C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/morcin_copy.md'
  },
  {
    href: 'https://experiencia21.tec.mx/courses/352034/files/137949181?module_item_id=22616836'
,
    text: 'meat_consumption.csv',
    file: 'C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/morcin_copy.md'
  },
  {
    href: 'https://en.wikipedia.org/wiki/Refractive_index',
    text: 'índice refractivo',
    file: 'C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/morcin_copy.md'
  },
  {
    href: 'https://experiencia21.tec.mx/courses/352034/files/138073590?module_item_id=22624552'
,
    text: 'refractive_index.csv',
    file: 'C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/morcin_copy.md'
  },
  {
    href: 'https://www.gov.scot/publications/national-drugs-mission-plan-2022-2026/pages/3/',  
    text: 'aquí',
    file: 'C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/morcin_copy.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Trainspotting',
    text: '',
    file: 'C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/morcin_copy.md'
  }
];


  //Ruta relativa
  it('Archivo existente con ruta relativa', () => {
    return expect(manipulate.mdLinks('morcin.md')).resolves.toMatchObject(ObjectExpectedRelative);
  });
  //Ruta absoluta
  it('Archivo existente con ruta absolita', () => {
    return expect(manipulate.mdLinks('C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/morcin_copy.md')).resolves.toMatchObject(ObjectExpectedAbsolute);
  });
});

