// need the employee class (which is the parent) 
// const Employee = require("./employee");

// engineer object constructor 
// class Engineer extends Employee {
//     constructor (name, id, email, github) {
//         super(name, id, email); 

//         this.github = github; 
//     }
//     getRole() {
//         return 'Engineer'; 
//     }

//     engineerGithub() {
//         return this.github; 
//     }
// }

function generateEngineer(engineerData) {
    return `<div class="row">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${engineerData.name}<p>Engineer</p></div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineerData.id}</li>
                <li class="list-group-item">Email: ${engineerData.email}</li>
                <li class="list-group-item">Github: ${engineerData.github}</li>
            </div>
        </div>`;
}

module.exports = generateEngineer; 