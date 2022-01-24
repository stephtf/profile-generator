const Manager = require('../lib/manager');


describe("saves the name, id, email, school, and role of the manager", () => {

    const manager = new Manager('name', id, 'email', office);

    // expect(manager.office).toEqual(Number); 

    expect(manager.getRole()).toEqual("Manager");

});
