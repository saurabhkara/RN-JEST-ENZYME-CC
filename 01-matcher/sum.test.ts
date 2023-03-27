import sum from './sum';


describe("describe block", () => {

    test('Addition of 2 & 3 is 5', () => {
        expect(sum(2, 3)).toBe(5);
    })

    it('object equality', () => {
        const obj = {};
        expect(obj).toEqual({})
    })

    test('Falsy value', () => {
        const n = undefined;
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
        expect(n).toBeUndefined();
        expect(n).not.toBeNull();
    })

    test("Number", () => {
        const num = 5;
        expect(num).toBe(5);
        expect(num).toEqual(5);
        expect(num).toBeGreaterThan(3);
        expect(num).toBeGreaterThanOrEqual(3);
        expect(num).not.toBeLessThanOrEqual(3);
    })

    it("Float",()=>{
        const flo= 0.2+0.1;
        expect(flo).toBeCloseTo(0.3);
    })

    test("String" ,()=>{
        const str = 'Saurabh';
        expect(str).toBe('Saurabh');
        expect(str).not.toMatch(/I/);
    })

    test("Array",()=>{
        const shoppingList = ['Shirt',"Trouser","Tie","Bag"];
        expect(shoppingList).toContain('Shirt');
    })

});



function compileAndroidCode(){
    throw new Error('You are using wrong IDE');
}

describe('Expection',()=>{
    test('expections handling in unit testing',()=>{
        expect(()=>compileAndroidCode()).toThrow('You are using wrong IDE');
    })
})