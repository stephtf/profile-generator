const Employee = require('../lib/employee');

describe('function for the employee data', () => {
    const employee = new Employee('Steph,' 222, 'stephfajardo@gmail.com'); 

    expect(employee.name).toEqual(String); 
    expect(employee.id).toEqual(Number); 
    expect(employee.email).toEqual(String); 

// get role function 
    expect(employee.getRole()).toEqual("Employee");

});