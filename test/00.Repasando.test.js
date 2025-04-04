const { obtenerValor } = require("../00.Repasando/00.Repasando");

describe("Pruebas de acceso a objetos en JavaScript", () => {  

  test("Función obtenerValor() devuelve el valor de una clave dada", () => {
    const producto = { id: 1, nombre: "Laptop", precio: 1200 };
    expect(obtenerValor(producto, "nombre")).toBe("Laptop");
  });
});
