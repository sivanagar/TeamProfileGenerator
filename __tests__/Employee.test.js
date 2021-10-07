const Employee = require('../lib/Employee')

test('Create New Employee', ()=>{
    const employee = new Employee('John Smith', '123','john@email.com')

    expect(employee.name).toBe('John Smith')
    expect(employee.employeeID).toBe('123')
    expect(employee.email).toBe('john@email.com')
    expect(employee.getName()).toBe('John Smith')
    expect(employee.getId()).toBe('123')
    expect(employee.getEmail()).toBe('john@email.com')
    expect(employee.getRole()).toBe('Employee')
})



