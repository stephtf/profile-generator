function generateHtml(data) {
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
        <main>
        <div class="row">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${manager.name}<p>Manager</p></div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: ${manager.email}</li>
                    <li class="list-group-item">Office number: ${manager.office}</li>
            </div>
        </div>
    
        <div class="row">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${engineer.name}<p>Engineer</p></div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                <li class="list-group-item">Github: ${engineer.github}</li>
            </div>
        </div>
    
        <div class="row">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${intern.name}<p>Intern</p></div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: ${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
            </div>
        </div>
        </main>
    </body>
    </html>
    `;
}

module.exports = generateHtml; 