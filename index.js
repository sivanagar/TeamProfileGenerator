const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHtml = require('./src/page-template')
const { writeFile, copyFile } = require('./utils/generate-site.js');

const team = []

function addEmployee(data , role) {
    if (role==="manager") {
        const manager = new Manager(data.name, data.employeeID, data.email , data.officeNumber)
        team.push(manager)
        //team.manager= {"name": data.name,"employeeId": data.employeeID,"email": data.email,"officeNumber": data.officeNumber}
    } else if (role==="engineer") {
        const engineer = new Engineer(data.name, data.employeeID, data.email, data.github)
        //const engineer = {"name": data.name,"employeeId": data.employeeID,"email": data.email,"github": data.github}
        team.push(engineer)
    } else if (role==="intern") {
        const intern = new Intern(data.name, data.employeeID, data.email, data.school)
        //const intern ={"name": data.name,"employeeId": data.employeeID,"email": data.email,"school": data.school}
        team.push(intern)
    } else {
        console.error("No Employee Added")
    }
}

function checkFinish(action) {
    if (action === "F") {
        console.log("Let's Finish up"); 
        //call generateHtml and create new file
        writeFile(generateHtml(team))
            .then(writeFileResponse => {
                console.log(writeFileResponse);
                //copy css
                return copyFile();
              })
              .then(copyFileResponse => {
                console.log(copyFileResponse);
              })
              .catch(err => {
                console.log(err);
              });                
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

console.log('==================================')
console.log('=======Team Webpage Builder=======')
console.log('==================================')

console.log("Let's start entering the team's employees")
//prompt user to input manager and team info
promptEmployee("manager")
 