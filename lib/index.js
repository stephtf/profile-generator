// these are required 
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./generateHtml');
const Manager = require('./manager');

// the following is the array of questions prompted for the user 
const questions = [
    // team manager questions:
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
    // engineer questions: 
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
    // intern's questions: 
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

// the following function prompts the user with questions and then takes the user input and adds it to the html page 
inquirer 
    .prompt(questions)
    .then((data) => {
        let html = generateHtml ({
            // manager
            name: `${data.name}`,
            id: `${data.id}`,
            email: `${data.email}`,
            office: `${data.office}`,
            // enginner
            engineerName: `${data.engineerName}`,
            engineerId: `${data.engineerId}`,
            engineerEmail: `${data.engineerEmail}`,
            engineerGithub: `${data.engineerGithub}`,
            // intern 
            internName: `${data.internName}`,
            internId: `${data.internId}`,
            internEmail: `${data.internEmail}`,
            internSchool: `${data.internSchool}`,
          })
// this function will generate the html file 
fs.writeFile('index.html', html, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('YAYYY');
    }
    })
});

// this function initializes the app 
function init() {} 

// this calls the init function 
init(); 


    