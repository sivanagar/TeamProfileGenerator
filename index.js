const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const team = {
    manager: [],
    engineers: [],
    interns:[]
}

function addEmployee(data , role) {
    if (role==="manager") {
        team.manager= new Manager(data.name, data.employeeID, data.email, data.officeNumber)
    } else if (role==="engineer") {
        const engineer = new Engineer(data.name, data.employeeID, data.email, data.github)
        team.engineers.push(engineer)
    } else if (role==="intern") {
        const intern = new Intern(data.name, data.employeeID, data.email, data.school)
        team.interns.push(intern)
    } else {
        console.error("No Employee Added")
    }
}

function checkFinish(action) {
    if (action === "F") {
        console.log("Let's Finish up");
        console.log(getTeam())
        //fix data 
        //call generateHtml
        //create file and copy css
        //using fs save content to dist lib.
    } else {
        promptEmployee(action)
    }
}


function promptEmployee(role) {
    inquirer.prompt([
        {
        type: 'input',
        message: `What is the ${role} name?`,
        name: 'name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter name');
                return false;
            }
        }
        },{
            type: 'input',
            message: `What is the ${role} employee ID?`,
            name: 'employeeID'
        },{
            type: 'input',
            message: `What is the ${role} email?`,
            name: 'email'
        },{
            type: 'input',
            message: `What is the ${role} office number?`,
            name: 'officeNumber',
            when(answers) {return role === 'manager'}
        },{
            type: 'input',
            message: `What is the ${role} GitHub username?`,
            name: 'github',
            when(answers) {return role === 'engineer'}
        },{
            type: 'input',
            message: `What is the ${role} school?`,
            name: 'school',
            when(answers) {return role === 'intern'}
        },{
            type: 'list',
            message: 'What whould you like to do?',
            name: 'action',
            choices: [
                {name:'Add an Engineer', value: 'engineer'},
            {name:'Add an Intern', value: 'intern'},
            {name:'or Finish building my team', value: 'F'}]
        }            

    ]).then(employee => {
        addEmployee(employee, role)
        return checkFinish(employee.action)
    })
}

function getTeam() {
    return [team.manager, team.engineers, team.interns]
}





console.log('==================================')
console.log('=======Team Webpage Builder=======')
console.log('==================================')

console.log("Let's start entering the team's employees")
//prompt manager info
promptEmployee("manager")
