import { fizzbuzz } from "../src"; // se busca el index.js como init

describe('Index', () => {
    test('Debe sumar dos números', () => {
      expect(2 + 3).toBe(5);
    });
});

describe("Index", () => {
    test("deberia devolver un string cuando pase un numero", () => {
        expect(fizzbuzz(1)).toBe("1");
    });

    test("Deberia return FIZZ si es divisible entre 3", () => {
        expect(fizzbuzz(6)).toBe("FIZZ");
    });

    test("Deberia return BUZZ si es divisible entre 5", () => {
        expect(fizzbuzz(10)).toBe("BUZZ");
    });

    test("Debería return FIZZBUZZ si es divisible entre 3 y 5", () => {
        expect(fizzbuzz(15)).toBe("FIZZBUZZ");
    });

});
