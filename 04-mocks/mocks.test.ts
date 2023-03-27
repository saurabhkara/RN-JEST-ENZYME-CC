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
})