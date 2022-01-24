const engineer = require('../lib/engineer');


describe("saves the name, id, email, and role of the engineer", () => {
    const engineer = new engineer();

    expect(engineer.name).toEqual(String); 

    expect(engineer.id).toEqual(Number); 

    expect(engineer.email).toEqual(String); 

    expect(engineer.role).toEqual("Engineer"); 

});
