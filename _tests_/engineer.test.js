const Engineer = require('../lib/engineer');

describe("saves the name, id, email, github, and role of the engineer", () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String)); 

    // get role: 
    expect(engineer.getRole()).toEqual("Engineer"); 

});
