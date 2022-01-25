// need the employee class (which is the parent) 
const Employee = require("./employee");

// engineer object constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email); 

        this.github = github; 
    }
    getRole() {
        return 'Engineer'; 
    }

    engineerGithub() {
        return this.github; 
    }
}

module.exports = Engineer; 