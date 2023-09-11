import { saludo } from "../../api/prueba"

describe("test archivo prueba.js",()=>{
    test("la funcion devuelve un hh",()=>{
        expect(saludo()).toBe("helo world")
    })
})