// need employee constructor 
// const Employee = require('./employee');

// class Manager extends Employee {
//     constructor(name, id, email, office) {
//         this.office = office;
//         super(name, id, email);     
//     }

//     getRole() {
//         return "Manager";
//     }

//     managerOffice() {
//         return this.office; 
//     }
    
// }

function generateManager(managerData) {
    return `<div class="row">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${managerData.name}<p>Manager</p></div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${managerData.id}</li>
                    <li class="list-group-item">Email: ${managerData.email}</li>
                    <li class="list-group-item">Office number: ${managerData.office}</li>
            </div>
        </div>`;       
}


// exporting manager constructor
module.exports = generateManager; 