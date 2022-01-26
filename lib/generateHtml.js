function generateHtml () {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css"/>
        <title>My Team's Profile Page</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>`
}


function generateManager(data) {
    return `<div class="row">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${data.managerName}<p>Manager</p></div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.managerId}</li>
                    <li class="list-group-item">Email: ${data.managerEmail}</li>
                    <li class="list-group-item">Office number: ${data.managerOffice}</li>
            </div>
        </div>`;       
}

function generateEngineer(data) {
    return `<div class="row">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${data.engineerName}<p>Engineer</p></div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.engineerId}</li>
                <li class="list-group-item">Email: ${data.engineerEmail}</li>
                <li class="list-group-item">Github: ${data.engineerGithub}</li>
            </div>
        </div>`;
}

function generateIntern(data) {
    return `<div class="row">
    <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${data.internName}<p>Intern</p></div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.internId}</li>
        <li class="list-group-item">Email: ${data.internEmail}</li>
        <li class="list-group-item">School: ${data.internSchool}</li>
    </div>`;
 }
    
function finishedFunction () {
    return `</main> 
    </body>
</html>`
}


   


module.exports = generateHtml,generateManager, generateEngineer, generateIntern;

// finishedFunction; 
// generateHtml