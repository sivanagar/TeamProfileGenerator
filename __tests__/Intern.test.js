const Intern = require('../lib/Intern')

test('Create New Intern', ()=>{
    const intern = new Intern('John Smith', '123','john@email.com', 'School')

    expect(intern.name).toBe('John Smith')
    expect(intern.employeeID).toBe('123')
    expect(intern.email).toBe('john@email.com')
    expect(intern.school).toBe('School')
})