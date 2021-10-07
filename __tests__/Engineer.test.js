const Engineer = require('../lib/Engineer')

test('Create New Engineer', ()=>{
    const engineer = new Engineer('John Smith', '123','john@email.com', 'johnsmith')

    expect(engineer.name).toBe('John Smith')
    expect(engineer.employeeID).toBe('123')
    expect(engineer.email).toBe('john@email.com')
    expect(engineer.github).toBe('johnsmith')
    expect(engineer.getName()).toBe('John Smith')
    expect(engineer.getId()).toBe('123')
    expect(engineer.getEmail()).toBe('john@email.com')
    expect(engineer.getGithub()).toBe('johnsmith')
    expect(engineer.getRole()).toBe('Engineer')
})

