// these are required 
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./generateHtml');

// javascript files for each employee class
const manager = require('./manager');
const engineer = require('./engineer');
const intern = require('./intern'); 
const employee = require('./employee');


// the following is the array of questions prompted about the team manager 

const firstQ = [
    { 
        type: 'list',
        message: "What kind of employee would you like to add?",
        choices: ["manager", "engineer", "intern"], 
        name: 'employeeRole'
    }
]

const managerQ = [
    {
        type: 'input',
        message: "What is your team manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is your team manager's employee ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is your team manager's e-mail address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your team manager's office number?",
        name: 'office',
    },
    {
        type: 'list', 
        message: 'Would you like to add another employee?',
        choices: ["yes", "no"],
        name: 'addMore'
    }
];

// engineer questions: 
const engineerQ = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: 'engineerId',
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: "What is the engineer's Github username?",
        name: 'engineerGithub',
    },
    {
        type: 'list', 
        message: 'Would you like to add another employee?',
        choices: ["yes", "no"],
        name: 'addMore'
    }
]; 

// intern's questions:
const internQ = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'internName',
    },
    {
        type: 'input',
        message: "What is the intern's employee ID?",
        name: 'internId',
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "Which school does the intern attend?",
        name: 'internSchool',
    },
    {
        type: 'list', 
        message: 'Would you like to add another employee?',
        choices: ["yes", "no"],
        name: 'addMore'
    }
];

const finalQuestion = [
    {
        type: 'list', 
        message: 'Would you like to add another employee?',
        choices: ["yes", "no"],
        name: 'addMore'
    }
]

// functions that create the prompts and data  
const firstQuestion = () => {
    return inquirer 
    .prompt (firstQ)
    .then((data) => {
        if (employeeRole === "manager") {
            managerQuestions();
        } else if (employeeRole === "engineer") {
            engineerQuestions();
        } else if (employeeRole === "intern") {
            internQuestions();
        }
    })
}


const managerQuestions = () => {
    return inquirer 
    .prompt(managerQ)
    .then((data) => {
        if (addMore === "yes") {
            firstQuestion(); 
        } else if (addMore === "no") {
            let html = generateHtml ({
                managerName: data.name, 
                managerId: data.id, 
                managerEmail: data.email, 
                managerOffice: data.office, 
            })
        }
       
         

const engineerQuestions = () => {
    return inquirer 
        .prompt(engineerQ)
        .then((data) => {
            if (addMore === "yes") {
                firstQuestion(); 
            } else if (addMore === "no") {
                let html = generateHtml ({
                    engineerName: data.name, 
                    engineerId: data.id, 
                    engineerEmail: data.email, 
                    engineerGithub: data.github, 
                })
        }
             
const internQuestions = () => {
    return inquirer 
        .prompt(internQ) 
        .then((data) => {
            if (adMore === "yes") {
                firstQuestion(); 
            } else if (addMore === "no") {
                let html = generateHtml ({
                    internName: data.name, 
                    internId: data.id, 
                    internEmail: data.email, 
                    internSchool: data.school, 
                })
            }
           




// this function will generate the html file based on the data from above
fs.appendFile('index.html', data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('YAYYY');
    }
    });


// calls first question function
firstQuestion(); 
