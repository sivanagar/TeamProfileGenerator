const Manager = require('../lib/Manager')


test('Create a new manager', () => {
    const manager = new Manager('John Smith' , '123' , 'john@email.com' , '456')

    expect(manager.name).toBe('John Smith')
    expect(manager.employeeID).toBe('123')
    expect(manager.email).toBe('john@email.com')
    expect(manager.officeNumber).toBe('456')
})

