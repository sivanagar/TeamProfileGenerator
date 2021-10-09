const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name , employeeID , email, school) {
        super(name, employeeID, email)
        
        this.school = school
    }

    getSchool() { 
        return this.school
    }

    getRole() {
        return 'Intern'
    }

    getSpecial() {
        return `<div class="card-text"></a><i class="fas fa-school"></i> ${this.getSchool()}
        </div>`
    }
}

module.exports = Intern