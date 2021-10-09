const Manager = require('../lib/Manager')


function managerHtml(manager) {
    //returns manager html block
    return `<div class="col-sm-3">
    <div class="card m-2 shadow">
        <div class="card-header d-flex justify-content-between">
            <span>Manager</span>
            <span>#504</span>
        </div>
        <div class="card-body">
            <h5 class="card-title">Manager Name</h5>
            
            <a href="mailto:#" class="card-link"><i class="fas fa-envelope"></i> email@gmail.com
            </a>
            <p class="card-text"><i class="fas fa-door-closed"></i> Room 35
            </p>
        </div>
    </div>
</div>
    ${manager}`;
}

function engineerHtml(engineers) {
    //returns engineer html block
    return `<div class="col-sm-3">
    <div class="card m-2 shadow ">
        <div class="card-header d-flex justify-content-between">
            <span>Engineer</span>
            <span>#504</span>
        </div>
        <div class="card-body">
            <h5 class="card-title">Engineer Name</h5>
            
            <a href="mailto:#" class="card-link"><i class="fas fa-envelope"></i> email@gmail.com
            </a><br>
            <a href="githublink" class="card-link"></a><i class="fab fa-github"></i> user
        </a>
        </div>
    </div>
</div>
<div class="col-sm-3">
    <div class="card m-2 shadow">
        <div class="card-header d-flex justify-content-between">
            <span>Engineer</span>
            <span>#504</span>
        </div>
        <div class="card-body">
            <h5 class="card-title">Engineer Name</h5>
            
            <a href="mailto:#" class="card-link"><i class="fas fa-envelope"></i> email@gmail.com
            </a><br>
            <a href="githublink" class="card-link"></a><i class="fab fa-github"></i> user
        </a>
        </div>
    </div>
</div>
     ${engineers}`;
}

function internHtml(interners) {
    //returns interns html block
    return `<div class="col-sm-3">
    <div class="card m-2 shadow">
        <div class="card-header d-flex justify-content-between">
            <span>Intern</span>
            <span>#504</span>
        </div>
        <div class="card-body">
            <h5 class="card-title">Intern Name</h5>
            
            <a href="mailto:#" class="card-link"><i class="fas fa-envelope"></i> email@gmail.com
            </a><br>
            <div class="card-text"></a><i class="fas fa-school"></i> School Name
            </div>
        </div>
    </div>
</div>
<div class="col-sm-3">
    <div class="card m-2 shadow">
        <div class="card-header d-flex justify-content-between">
            <span>Intern</span>
            <span>#504</span>
        </div>
        <div class="card-body">
            <h5 class="card-title">Intern Name</h5>
            
            <a href="mailto:#" class="card-link"><i class="fas fa-envelope"></i> email@gmail.com
            </a><br>
            <div class="card-text"></a><i class="fas fa-school"></i> School Name
            </div>
        </div>
    </div>
</div>
     ${interners}`;
}

module.exports = team => {
    console.log(team)
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        
            <header class="nav justify-content-center"> <h1 class="p-3"><i class="fas fa-users"></i> Team</h1></header>
            <div class="container">
                <div class="row justify-content-center">
                ${managerHtml(team.manager)}
                </div>
                <div class="row justify-content-center">
                ${engineerHtml(team.engineers)}
                
                </div>
                <div class="row justify-content-center">
                ${internHtml(team.interns)}
                </div>
           
    </body>
    </html>`;
}