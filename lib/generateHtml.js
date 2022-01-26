function generateHtml() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/style.css"/>
        <title>My Team's Profile Page</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>`;
};

function generateManager(managerData) {
    return `<div class="row">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${managerData.name}<p>Manager</p></div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${managerData.id}</li>
                    <li class="list-group-item">Email: ${managerData.email}</li>
                    <li class="list-group-item">Office number: ${managerData.office}</li>
            </div>
        </div>`;       
};

function generateEngineer(engineerData) {
    return `<div class="row">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${engineerData.name}<p>Engineer</p></div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineerData.id}</li>
                <li class="list-group-item">Email: ${engineerData.email}</li>
                <li class="list-group-item">Github: ${engineerData.github}</li>
            </div>
        </div>`;
};

function generateIntern(internData) {
    return `<div class="row">
    <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${internData.name}<p>Intern</p></div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${internData.id}</li>
        <li class="list-group-item">Email: ${internData.email}</li>
        <li class="list-group-item">School: ${internData.school}</li>
    </div>`;
 }; 
    

function finishedFunction() {
    return `</main> 
    </body>
</html>`;
}
   









    
module.exports = generateHtml, generateManager, generateEngineer, generateIntern, finishedFunction; 