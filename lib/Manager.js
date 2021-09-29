const Employee = require('./Employee')
const inquirer = require('inquirer')

class Manager extends Employee {
    constructor(name , employeeID , email, officeNumber) {
        super(name, employeeID, email)
        this.officeNumber = officeNumber
    }

    promptInfo() {
        return inquirer.prompt([
            {
            type: 'input',
            message: 'What is the manager name?',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
            }
        },{
            type: 'input',
            message: 'What is the manager employee ID?',
            name: 'employeeID'
        },{
            type: 'input',
            message: 'What is the manager email?',
            name: 'email'
        }, {
            type: 'input',
            message: 'What is the manager office number?',
            name: 'officeNumber'
        }        

        ])
        .then(data => {
            this.name = data.name
            this.email = data.email
            this.officeNumber = data.officeNumber
            this.employeeID= data.employeeID

            console.table(this)
        })
        .catch(err => {
            console.log(err);
          });
        
    }
}

module.exports = Manager
