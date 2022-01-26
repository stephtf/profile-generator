// need the employee constructor 
// const Employee = require('./employee');

// intern object constructor 
// class Intern extends Employee {
//     constructor (name, id, email, school) {
//         this.school = school; 
//         super(name, id, email); 
//     }
//     getRole() {
//         return "Intern"; 
//     }
//     internSchool() {
//         return this.school;
//     }
// }

function generateIntern(internData) {
    return `<div class="row">
    <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${internData.name}<p>Intern</p></div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${internData.id}</li>
        <li class="list-group-item">Email: ${internData.email}</li>
        <li class="list-group-item">School: ${internData.school}</li>
    </div>`;
 }

module.exports = generateIntern; 