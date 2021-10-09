const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name , employeeID , email, github) {
        super(name, employeeID, email)
        
        this.github = github
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
    
    getSpecial() {
        return `<a href="https://github.com/${this.getGithub()}" class="card-link"><i class="fab fa-github"></i> ${this.getGithub()}
        </a>`
    }
}

module.exports = Engineer