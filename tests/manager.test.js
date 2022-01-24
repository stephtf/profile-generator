const manager = require('../lib/manager');


describe("saves the name, id, email, school, and role of the manager", () => {

    const manager = new Manager();

    expect(manager.name).toEqual(String); 

    expect(manager.id).toEqual(Number); 

    expect(manager.email).toEqual(String); 

    expect(manager.office).toEqual(Number); 

    expect(manager.role).toEqual("Manager"); 

});
