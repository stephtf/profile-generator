// need employee constructor 
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        this.office = office;
        super(name, id, email);     
    }

    getRole() {
        return "Manager";
    }

    managerOffice() {
        return this.office; 
    }
    
}

// exporting manager constructor
module.exports = Manager; 