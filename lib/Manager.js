const Employee = require('./Employee')


class Manager extends Employee {
    constructor(name , employeeID , email, officeNumber) {
        super(name, employeeID, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getSpecial() {
        return `<p class="card-text"><i class="fas fa-door-closed"></i> Room ${this.getOfficeNumber()}
        </p>`
    }
}

module.exports = Manager
