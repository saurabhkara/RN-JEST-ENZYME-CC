let animals = [''];



describe('setting up and tearing down', () => {

    beforeAll(() => {
        console.log('Before All');
        animals = ['Dog', 'Cat', 'Elephant'];
    })

    beforeEach(() => {
        console.log('Befor Each')
        animals = ['Dog', 'Cat', 'Elephant'];
    })

    afterEach(() => {
        console.log('After each');
    })

    afterAll(() => {
        console.log('After All');
        animals = ['']
    })

    test('Adding aninmal at end of list', () => {
        animals.push('monkey');
        expect(animals[animals.length - 1]).toBe('monkey')
    });


    test('Adding animal at begining of list', () => {
        animals.unshift('fox');
        expect(animals[0]).toBe('fox');
    })

    test('Array lenght should be 4', () => {
        expect(animals.length).toBe(3);
    })
})


//Only method to run particular method
describe('Testing Only some case', () => {
    test('Random', () => {
        expect(1).toBeTruthy();
    })
})

