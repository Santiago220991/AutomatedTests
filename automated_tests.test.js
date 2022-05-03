const {stringLength,reverseString,calculator,capitalized} = require('./automated_tests.js');

//stringLenght tests

test("String Count", ()=>{
    expect(stringLength("Holas")).toBe(5)
})

test("String lenght =1", ()=>{
    expect(stringLength("1")).toBe(1)
})

test("String lenght >10", ()=>{
    expect(stringLength("Holacomoestas")).toMatch("error")
})

test("String lenght <1", ()=>{
    expect(stringLength("")).toMatch("error")
})

//string reverse tests
test("Reverse String",()=>{
    expect(reverseString("hola")).toMatch("aloh")
})

//calculator
describe('calculator', () => {
    test('add', () => {
      expect(calculator.add(2,3)).toBe(5);
      expect(calculator.add(1,2)).toBe(3);
      expect(calculator.add(0,10)).toBe(10);
    })})

    describe('calculator', () => {
        test('substract', () => {
          expect(calculator.substract(3,2)).toBe(1);
          expect(calculator.substract(1,2)).toBe(-1);
          expect(calculator.substract(0,10)).toBe(-10);
        })})

    describe('calculator', () => {
        test('multiply', () => {
            expect(calculator.multiply(3,2)).toBe(6);
            expect(calculator.multiply(1,-2)).toBe(-2);
            expect(calculator.multiply(0,10)).toBe(0);
        })})
    describe('calculator', () => {
        test('divide', () => {
            expect(calculator.divide(3,2)).toBe(1.5);
            expect(calculator.divide(1,-2)).toBe(-0.5);
            expect(calculator.divide(0,10)).toBe(0);
            })})

//capitalized string

test("capitalized",()=>{
    expect(typeof(capitalized("hola"))).toBe("string")
})
test("capitalized",()=>{
    expect(capitalized("hola")).toBe("Hola")
})