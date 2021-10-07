const Employee = require('./Employee')
const inquirer = require('inquirer')

class Manager extends Employee {
    constructor(name , employeeID , email, officeNumber) {
        super(name, employeeID, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager'
    }
  
}

module.exports = Manager
