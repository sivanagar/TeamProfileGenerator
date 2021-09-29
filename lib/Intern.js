const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name , employeeID , email, school) {
        super(name, employeeID, email)
        
        this.school = school
    }
}

module.exports = Intern