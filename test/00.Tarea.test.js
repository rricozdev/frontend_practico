// archivo: test/00.Comenzando.test.js
const {
    persona1,
    persona2,
    clave,
    edad,
    usuario1,
    producto,
    claves,
    valores,
    entradas,
    tienePrecio,
    tienePrecio2,
    estudiantes,
    segundoNombre,
    obtenerNombre,
    obtenerApellido,
    obtenerConClave,
    obtenerCiudad,
    obtenerClaves,
    obtenerValores,
    obtenerEntradas,
    verificarPropiedad,
    obtenerNombreDeEstudiante,
    obtenerValor
  } = require("../00.Repasando/00.Tarea");
  
  describe("Pruebas de acceso a objetos en JavaScript", () => {
    test("1. Accede correctamente con notación de punto", () => {
      expect(obtenerNombre(persona1)).toBe("Carlos");
    });
  
    test("2. Accede correctamente con notación de corchetes", () => {
      expect(obtenerApellido(persona2)).toBe("Gomez");
    });
  
    test("3. Acceso con clave dinámica usando variable", () => {
      expect(obtenerConClave(persona1, clave)).toBe(25);
    });
  
    test("4. Acceso a propiedad anidada", () => {
      expect(obtenerCiudad({ direccion: { ciudad: "Bogotá" } })).toBe("Bogotá");
      expect(usuario1.datos.nombre).toBe("Luisa");
      expect(usuario1.datos.direccion.pais).toBe("Colombia");
    });
  
    test("5. Obtener claves con Object.keys()", () => {
      expect(obtenerClaves(producto)).toEqual(["id", "nombre", "precio"]);
      expect(claves).toEqual(["id", "nombre", "precio"]);
    });
  
    test("6. Obtener valores con Object.values()", () => {
      expect(obtenerValores(producto)).toEqual([1, "Laptop", 1200]);
      expect(valores).toEqual([1, "Laptop", 1200]);
    });
  
    test("7. Obtener entradas con Object.entries()", () => {
      expect(obtenerEntradas(producto)).toEqual([
        ["id", 1],
        ["nombre", "Laptop"],
        ["precio", 1200]
      ]);
      expect(entradas).toEqual([
        ["id", 1],
        ["nombre", "Laptop"],
        ["precio", 1200]
      ]);
    });
  
    test("8. Verificar propiedades con 'in' y hasOwnProperty", () => {
      expect(verificarPropiedad(producto, "precio")).toBe(true);
      expect(tienePrecio).toBe(true);
      expect(tienePrecio2).toBe(true);
    });
  
    test("9. Acceso a objeto dentro de array", () => {
      expect(obtenerNombreDeEstudiante(estudiantes, 1)).toBe("Luis");
      expect(segundoNombre).toBe("Luis");
    });
  
    test("10. Función obtenerValor() devuelve el valor correcto", () => {
      expect(obtenerValor(producto, "nombre")).toBe("Laptop");
    });
  });
  