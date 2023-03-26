import sum from './sum';

test('Addition of 2 & 3 is 5',()=>{
    expect(sum(2,3)).toBe(5);
})

it('5 + 3 is 8',()=>{
    expect(sum(5,3)).toBe(8);
})