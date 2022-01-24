const Questions = require('../lib/index');


describe("saves the name, id, email, school, and role of the manager", () => {

    const questions = new Questions();

    expect(manager.name).toEqual(String); 

    expect(manager.id).toEqual(Number); 

    expect(manager.email).toEqual(String); 

    expect(manager.office).toEqual(Number); 

});
