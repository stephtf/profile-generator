const Employee = require('.Employee');

// we're taking the parent of Employee and allowing these parameters to be used with Manager
class Manager extends Employee {
    constructor(name, id, email, office) {
        this.office = office;

        super(name, id, email);
    }

    getRole() {
        return "Manager";
    }
    
}

// exporting manager constructor
module.exports = Manager; 