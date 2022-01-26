const Manager = require('../lib/generateHtml');

describe("saves the name, id, email, school, and role of the manager", () => {

    const manager = new Manager();

    expect(data.managerName).toEqual(expect.any(String)); 
    expect(data.managerId).toEqual(expect.any(Number)); 
    expect(data.managerEmail).toEqual(expect.any(String)); 
    expect(data.managerOffice).toEqual(expect.any(Number)); 
    expect(employeeData.employeeRole).toEqual("manager");

});
