const Employee = require('../lib/employee');

describe('function for the employee data', () => {
    const employee = new Employee(); 

    expect(employee.name).toEqual(expect.any(String)); 
    expect(employee.id).toEqual(expect.any(Number)); 
    expect(employee.email).toEqual(expect.any(String)); 

// get role function 
    expect(employee.getRole()).toEqual("Employee");

});