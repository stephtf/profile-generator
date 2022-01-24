const Questions = require('../lib/index');


describe("saves the name, id, email, github, and role of the engineer", () => {
    const questions = new Questions();

    expect(engineerName).toEqual(String); 

    expect(engineerId).toEqual(Number); 

    expect(engineerEmail).toEqual(String); 

    expect(engineerGithub).toEqual(String); 

});
