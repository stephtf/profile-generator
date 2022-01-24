const Inter = require('../lib/intern');


describe("saves the name, id, email, school, and role of the intern", () => {

    const intern = new Intern();

    expect(intern.name).toEqual(String); 

    expect(intern.id).toEqual(Number); 

    expect(intern.email).toEqual(String); 

    expect(intern.school).toEqual(String); 

    expect(intern.getRole()).toEqual('Intern');

});
