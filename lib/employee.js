class Employee { 
    constructor(name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email;
    }

    employeeName() {
        return this.name;
    }

    getRole() {
        return "Employee";
    }

    employeeId() {
        return this.id;
    }

    employeeEmail() {
        return this.email;
    }

}; 

module.exports = Employee;