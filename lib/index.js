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
        name: 'employeeRole',
    },
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
    .then((employeeRole) => {
        if (employeeRole = "manager") {
            managerQuestions();
        } else if (employeeRole = "engineer") {
            engineerQuestions();
        } else if (employeeRole = "intern") {
            internQuestions();
        }
    })
};


// calls first question function
firstQuestion(); 

const managerQuestions = () => {
    return inquirer 
    .prompt(managerQ)
    .then((managerData) => {
        if (addMore = "yes, I would like to add another") {
            firstQuestion(); 
        } else if (addMore = "no. I'm done adding to my team") {
            let managerAdded = generateManager({
                managerName: `${managerData.name}`, 
                managerId: `${managerData.id}`, 
                managerEmail: `${managerData.email}`, 
                managerOffice: `${managerData.office}`, 
            });

            fs.appendFile('index.html', managerAdded, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('YAYYY');
                }
            });
        }
});    
}   
         

const engineerQuestions = () => {
    return inquirer 
        .prompt(engineerQ)
        .then((engineerData) => {
            if (addMore = "yes, I would like to add another") {
                firstQuestion(); 
            } else if (addMore = "no. I'm done adding to my team") {
                let engineerAdded =  generateEngineer({
                    engineerName: `${engineerData.name}`, 
                    engineerId: `${engineerData.id}`, 
                    engineerEmail: `${engineerData.email}`, 
                    engineerGithub: `${engineerData.github}`, 
                }); 
                fs.appendFile('index.html', engineerAdded, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('YAYYY');
                    }
                });
            }
    });    
    }            
    
             
const internQuestions = () => {
    return inquirer 
        .prompt(internQ) 
        .then((internData) => {
            if (addMore = "yes, I would like to add another") {
                firstQuestion(); 
            } else if (addMore = "no. I'm done adding to my team") {
                let internAdded = generateIntern({
                    internName: `${internData.name}`, 
                    internId: `${internData.id}`, 
                    internEmail: `${internData.email}`, 
                    internSchool: `${internData.school}`,}); 
                
                fs.appendFile('index.html', internAdded, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('YAYYY');
                    }
                });
            }
    });    
    } 
        





// this function will generate the html file based on the data from above

let newfile = generateHtml(); 

fs.appendFile('index.html', newfile, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('YAYYY');
        }
}); 
