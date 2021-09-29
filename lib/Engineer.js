const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name , employeeID , email, github) {
        super(name, employeeID, email)
        
        this.github = github
    }
}

module.exports = Engineer