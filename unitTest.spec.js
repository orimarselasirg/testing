const suma = require('./functionTesting');

describe('probando test de suma', ()=>{
    test('probando happy track 1', ()=>{
        expect(suma(1,2)).toBe(3)
    })
    test('probando happy track 2', ()=>{
        const a = 0
        const b = 3
        expect(typeof suma(a,b)).toBe('number')
    })
    test('probando happy track 3', ()=>{
        const a = 0
        const b = 3
        expect(typeof suma(a,b)).toBe('number')
    })
})