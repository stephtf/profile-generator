// need the employee constructor 
const Employee = require('./employee');

// intern object constructor 
class Intern extends Employee {
    constructor (name, id, email, school) {
        this.school = school; 
        super(name, id, email); 
    }
    getRole() {
        return "Intern"; 
    }
    internSchool() {
        return this.school;
    }
}

module.exports = Intern; 