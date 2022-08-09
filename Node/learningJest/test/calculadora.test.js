let calculadora = require("../calculadora.js");

describe("Operações básicas", () => {
    test("Deve retornar o valor 10 ao receber os valores 5 e 5", () => {
        let result = calculadora.soma(5,5);
        expect(result).toEqual(10);
    });
    
    test("Deve retornar o valor 10 ao receber 5 e 2", () => {
        let result = calculadora.mult(5,2);
        expect(result).toEqual(10);
    });
});
