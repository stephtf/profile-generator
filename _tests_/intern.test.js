const Intern = require('../lib/intern');


describe("saves the name, id, email, school, and role of the intern", () => {
    const intern = new Intern();

    expect(intern.school).toEqual(expect.any(String)); 

    expect(intern.getRole()).toEqual('Intern');

});
