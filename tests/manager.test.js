const Manager = require('../lib/manager');

describe("saves the name, id, email, school, and role of the manager", () => {

    const manager = new Manager();

    expect(manager.office).toEqual(expect.any(Number)); 

    expect(manager.getRole()).toEqual("Manager");

});
