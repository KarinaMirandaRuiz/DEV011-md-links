const validate = require("../src/validate");
const path = require("node:path");

//Test para función Extension
describe("Validación de la extensión es tipo Markdown", () => {
  it("Debe retornar false si el archivo no es markdown.", () => {
    //Extenciones validas
    expect(validate.Extension("MockDocumento.md")).toBe(true);
    expect(validate.Extension("MockDocumento.mkd")).toBe(true);
    expect(validate.Extension("MockDocumento.mdwn")).toBe(true);
    expect(validate.Extension("MockDocumento.mdown")).toBe(true);
    expect(validate.Extension("MockDocumento.mdtxt")).toBe(true);
    expect(validate.Extension("MockDocumento.mdtext")).toBe(true);
    expect(validate.Extension("MockDocumento.markdown")).toBe(true);
    expect(validate.Extension("MockDocumento.text")).toBe(true);
    //Algunas extenciones comunes pero inválidas
    expect(validate.Extension("MockDocumento.txt")).toBe(false);
    expect(validate.Extension("MockDocumento.doc")).toBe(false);
    expect(validate.Extension("MockDocumento.docx")).toBe(false);
    expect(validate.Extension("MockDocumento.csv")).toBe(false);
    expect(validate.Extension("MockDocumento")).toBe(false);
  });
});

//Test para función transformaRuta
describe("Transforma la ruta si no es absoluta", () => {
  it("Ruta absoluta", () => {
    expect(
      validate.transformaRuta(
        "C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/markdown2.md"
      )
    ).toMatch(
      "C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/markdown2.md"
    );
  });
  it("Ruta relativa", () => {
    console.log(validate.transformaRuta("markdown.md"));
    expect(validate.transformaRuta("markdown.md")).toBe(
      path.normalize(
        "C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/src/markdown.md"
      )
    );
  });
});

//Test para función existeRuta
describe("Valida si la ruta existe", () => {
  it("Sí existe la ruta", () => {
    expect(
      validate.existeRuta(
        "C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/markdown2.md"
      )
    ).toBe(true);
  });
  it("No existe la ruta", () => {
    console.log(validate.transformaRuta("markdown.md"));
    expect(
      validate.existeRuta(
        "C:/Users/gatic/Documents/Bootcamp/Proyecto3/DEV011-md-links/markdownFake.md"
      )
    ).toBe(false);
  });
});
