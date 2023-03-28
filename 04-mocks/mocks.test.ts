test('test returns undefined',()=>{
    const mock = jest.fn();

    const result = mock('foo');
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('foo');
});



test('mock implementation',()=>{
    const mock = jest.fn((x)=>'bar');

    expect(mock('foo')).toBe('bar');
    expect(mock).toHaveBeenCalledWith('foo');
})



test('Also mock implementation',()=>{
    const mock = jest.fn().mockImplementation((x)=>'bar');

    expect(mock('foo')).toBe('bar');
    expect(mock).toHaveBeenCalledWith('foo');
})


test('Mock implementation one time',()=>{
    const mock = jest.fn().mockImplementationOnce((x)=>'bar');

    expect(mock('foo')).toBe('bar');
    expect(mock).toHaveBeenCalledWith('foo');

    expect(mock('saurabh')).toBeUndefined();
    // expect(mock).toHaveBeenCalledWith('Saurabh');
})


test('mock return value',()=>{
    const mock = jest.fn();
    mock.mockReturnValue('bar');


    expect(mock()).toBe('bar');
    expect(mock).toHaveBeenCalled();
})

test('mock promise resolution',()=>{
    const mock = jest.fn().mockImplementation((x)=>'bar');
    mock.mockResolvedValue('bar');

    expect(mock('foo')).resolves.toBe('bar');
    expect(mock).toHaveBeenCalledWith('foo')
});

const forEach =(items :number[],callback:(x:number)=>number)=>{
    for(let i=0; i<items.length; i++){
        callback(items[i])
    }
}


test('mock callbacks',()=>{
    const mock = jest.fn(x=>x+10);

    forEach([0,1,3],mock)

    expect(mock.mock.calls.length).toBe(3);
    expect(mock).toHaveBeenCalled();
    expect(mock.mock.calls[0][0]).toBe(0);
    expect(mock.mock.calls[1][0]).toBe(1);
    expect(mock.mock.calls[2][0]).toBe(3);
    expect(mock.mock.results[0].value).toBe(10);
    expect(mock.mock.results[1].value).toBe(11);
    expect(mock.mock.results[2].value).toBe(13);
})