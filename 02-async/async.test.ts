import getData from "./async";

const res = {
    category: "men's clothing",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) inthe padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "price": 109.95, "rating": { "count": 120, "rate": 3.9 }, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
}


//how to check object shallow copy equality

it('Api res testing with async await', async () => {
    const item = await getData();
    expect(item.id).toEqual(1);
    // expect(item).toEqual(res);
})

test("api testing with promise chaining",()=>{
    getData().then((item)=>{
        expect(item.id).toBe(1);
    })
})