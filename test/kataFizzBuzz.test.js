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
});