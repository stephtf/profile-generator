// these are required 
const inquirer = require('inquirer');
const fs = require('fs');

// generateHtml functions 


const generateFunctions = require('./generateHtml');

// const myfunctions = require('./generateHtml')
// const generateHtml = require('./generateHtml');
// const generateManager = require('./generateHtml');
// const generateEngineer = require('./generateHtml');
// const generateIntern = require('./generateHtml');
// const finishedFunction = require('./generateHtml');

// javascript files for each employee class
// const manager = require('./manager');
// const engineer = require('./engineer');
// const intern = require('./intern'); 
// const employee = require('./employee');


// the following is the array of questions prompted about the team manager 

const firstQ = [
    { 
        type: 'list',
        message: "What kind of employee would you like to add?",
        choices: ["manager", "engineer", "intern"], 
        name: 'employeeRole',
    },
]

const managerQ = [
    {
        type: 'input',
        message: "What is your team manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is your team manager's employee ID?",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "What is your team manager's e-mail address?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is your team manager's office number?",
        name: 'managerOffice',
    },
    {
        type: 'list', 
        message: 'Would you like to add another employee?',
        choices: ["yes, I would like to add another", "no. I'm done adding to my team"],
        name: 'addMore',
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
    {
        type: 'list', 
        message: 'Would you like to add another employee?',
        choices: ["yes, I would like to add another", "no. I'm done adding to my team"],
        name: 'addMore',
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
    {
        type: 'list', 
        message: 'Would you like to add another employee?',
        choices: ["yes, I would like to add another", "no. I'm done adding to my team"],
        name: 'addMore',
    },
];


// functions that create the prompts and data  
const firstQuestion = () => {
    return inquirer 
    .prompt(firstQ)
    .then((employeeData) => {
        if (employeeData.employeeRole == "manager") {
            managerQuestions();
        } else if (employeeData.employeeRole == "engineer") {
            engineerQuestions();
        } else if (employeeData.employeeRole == "intern") {
            internQuestions();
        }
    })
};


fs.appendFile('index.html', generateFunctions.generateHtml(), (err) => {})

// calls first question function
firstQuestion(); 

const managerQuestions = () => {
    return inquirer 
    .prompt(managerQ)
    .then((data) => {
        let managerAdded = generateFunctions.generateManager({
            managerName: `${data.managerName}`, 
            managerId: `${data.managerId}`, 
            managerEmail: `${data.managerEmail}`, 
            managerOffice: `${data.managerOffice}`, 
        })
        fs.appendFile('index.html', managerAdded, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('');
            }
        })
        if (data.addMore == "yes, I would like to add another") {
            firstQuestion(); 
        } else if (data.addMore == "no. I'm done adding to my team") {
            console.log('Cool beans! Your team profile page is ready.'); 
        }
});    
}   
         

const engineerQuestions = () => {
    return inquirer 
        .prompt(engineerQ)
        .then((data) => {
            let engineerAdded =  generateFunctions.generateEngineer({
                engineerName: `${data.engineerName}`, 
                engineerId: `${data.engineerId}`, 
                engineerEmail: `${data.engineerEmail}`, 
                engineerGithub: `${data.engineerGithub}`, 
            }) 
            fs.appendFile('index.html', engineerAdded, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('');
                }
            })
            if (data.addMore == "yes, I would like to add another") {
                firstQuestion(); 
            } else if (data.addMore == "no. I'm done adding to my team") {
                console.log('Cool beans! Your team profile page is ready.'); 
            }
    });    
    }            
    
             
const internQuestions = () => {
    return inquirer 
        .prompt(internQ) 
        .then((data) => {
            let internAdded = generateFunctions.generateIntern({
                internName: `${data.internName}`, 
                internId: `${data.internId}`, 
                internEmail: `${data.internEmail}`, 
                internSchool: `${data.internSchool}`,})
            fs.appendFile('index.html', internAdded, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('');
                }
            })
            if (data.addMore == "yes, I would like to add another") {
                firstQuestion(); 
            } else if (data.addMore == "no. I'm done adding to my team") {
                console.log('Cool beans! Your team profile page is ready.'); 
            }
    });    
    } 
        

