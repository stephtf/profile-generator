const intern = require('../lib/intern');


describe("saves the name, id, email, school, and role of the intern", () => {

    const intern = new Intern();

    expect(intern.name).toEqual(String); 

    expect(intern.id).toEqual(Number); 

    expect(inter.email).toEqual(String); 

    expect(inter.school).toEqual(String); 

    expect(intern.role).toEqual("Intern"); 

});
