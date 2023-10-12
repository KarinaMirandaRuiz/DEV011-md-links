const md = require("../src/md");
const manipulate = require("../src/manage-md");

//Cuando la ruta sí existe
const ObjectExpectedRelativeTrue = [
  {
    href: "https://www.bbc.com/newsadfgafgfg",
    text: "BBC",
    file: "C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md",
    status: 404,
    ok: "fail",
  },
  {
    href: "https://es.wikipedia.org/wiki/Trainspotting",
    text: "meat_consumption.csv",
    file: "C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md",
    status: 200,
    ok: "ok",
  },
  {
    href: "https://www.gov.scot/publications/national-drugs-mission-plan-2022-2026/pages/3/",
    text: "aquí",
    file: "C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md",
    status: 200,
    ok: "ok",
  },
  {
    href: "https://es.wikipedia.org/wiki/Trainspotting",
    text: "",
    file: "C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md",
    status: 200,
    ok: "ok",
  },
];

const ObjectExpectedRelativeFalse = [
  {
    href: "https://www.bbc.com/newsadfgafgfg",
    text: "BBC",
    file: "C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md",
  },
  {
    href: "https://es.wikipedia.org/wiki/Trainspotting",
    text: "meat_consumption.csv",
    file: "C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md",
  },
  {
    href: "https://www.gov.scot/publications/national-drugs-mission-plan-2022-2026/pages/3/",
    text: "aquí",
    file: "C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md",
  },
  {
    href: "https://es.wikipedia.org/wiki/Trainspotting",
    text: "",
    file: "C:\\Users\\gatic\\Documents\\Bootcamp\\Proyecto3\\DEV011-md-links\\src\\morcin.md",
  },
];

const ObjectExpectedAbsoluteFalse = [
  {
    href: "https://www.bbc.com/newsadfgafgfg",
    text: "BBC",
    file: "C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/test/morcin_copy.md",
  },
  {
    href: "https://experiencia21.tec.mx/courses/352034/files/137949181?module_item",
    text: "meat_consumption.csv",
    file: "C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/test/morcin_copy.md",
  },
  {
    href: "https://www.gov.scot/publications/national-drugs-mission-plan-2022-2026/pages/3/",
    text: "aquí",
    file: "C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/test/morcin_copy.md",
  },
  {
    href: "https://es.wikipedia.org/wiki/Trainspotting",
    text: "",
    file: "C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/test/morcin_copy.md",
  },
];


//Test para función mdLinks que lee MD
describe("Validación de función mdLinks", () => {
  //Cuando la ruta no existe
  it("Debería de lanzar Error si: es un archivo MD que no existe", () => {
    return expect(md.mdLinks("morcin_copy2.md")).rejects.toThrow(Error);
  });
  it("Debería de mostrar Ruta invalida si: es un archivo MD que no existe", () => {
    return expect(md.mdLinks("morcin_copy2.md")).rejects.toThrow(
      "Ruta invalida"
    );
  });

  //Cuando el archivo tiene una extención diferente
  it("Debería de lanzar Error si: tiene una extención diferente", () => {
    return expect(md.mdLinks("morcin.txt")).rejects.toThrow(Error);
  });
  it("Debería de mostrar No es Markdown si: tiene una extención diferente", () => {
    return expect(md.mdLinks("morcin.txt")).rejects.toThrow(
      new Error("No es Markdown")
    );
  });

  //Cuando el archivo no se puede leer
  it("Debería de lanzar Error si: no se puede abrir el archivo", () => {
    return expect(
      md.mdLinks(
        "C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/test/morcin_copy(Restringido).md"
      )
    ).rejects.toThrow(Error);
  });
  it("Debería de mostrar No se pudo leer si: no se puede abrir el archivo", () => {
    return expect(
      md.mdLinks(
        "C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/test/morcin_copy(Restringido).md"
      )
    ).rejects.toThrow("Ruta invalida");
  });

  //Ruta absoluta
  it("Archivo existente con ruta absoluta sin parámetro de validación", () => {
    return expect(
      md.mdLinks(
        "C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/test/morcin_copy.md"
      )
    ).resolves.toMatchObject(ObjectExpectedAbsoluteFalse);
  });

  //Ruta relativa y validación True
  it("Archivo existente con ruta relativa y valida status de links", () => {
    return expect(md.mdLinks("morcin.md", true)).resolves.toMatchObject(
      ObjectExpectedRelativeTrue
    );
  });

  //Ruta relativa y validación False
  it("Archivo existente con ruta relativa sin validación de links", () => {
    return expect(
      md.mdLinks("morcin.md", false)
    ).resolves.toMatchObject(ObjectExpectedRelativeFalse);
  });


});

//Validación de cálculo de estadísticas
describe('Validación de la función calculoStats', ()=>{
  it("Cálculo de estatísticas sin validación de links", () => {
    return expect(
      manipulate.calculoStats(ObjectExpectedRelativeTrue, false)
    ).toBe("Ligas: 4\nLigas unicas: 3");
  });
  it("Cálculo de estatísticas con validación de links", () => {
    return expect(
      manipulate.calculoStats(ObjectExpectedRelativeTrue, true)
    ).toBe("Ligas: 4\nLigas unicas: 3\nInformativos: 0\nRedireccionados: 0\nRotos: 1\nError de servidor: 0");
  });

})   
