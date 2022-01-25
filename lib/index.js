// these are required 
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./generateHtml');

// javascript files for each employee class
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern'); 
const Employee = require('./employee');


// the following is the array of questions prompted for the user about the team manager 
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
    ];

// creates the prompts and data  
const managerQuestions = () => {
    return inquirer 
    .prompt(managerQ)
    .then((data) => {
        let managerData = (manager.name, manager.id, manager.email, manager.office); 
        let manager = new Manager (name, id, email, office); 
    }

const engineerQuestions = () => {
    return inquirer 
        .prompt(engineerQ)
        .then((data) => {
            let engineerData = (engineer.name, engineer.id, engineer.email, engineer.github); 
            let engineer = new Engineer (name, id, email, github); 
        })
    } 

const internQuestions = () => {
    return inquirer 
        .prompt(internQ) 
        .then((data) => {
            let internData = (intern.name, intern.id, intern.email, intern.school); 
        let intern = new Intern (name, id, email, office); 
        })
}
}







// this function will generate the html file based on the data from above
fs.writeFile('index.html', data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('YAYYY');
    }
    });


// prompt functions
managerQuestions();
engineerQuestions(); 
internQuestions(); 
