function employeeCard(employees){
    let cards = ``;
    employees.map(employee => {
        cards += `<div class="col-sm-3">
        <div class="card m-2 shadow ">
            <div class="card-header d-flex justify-content-between">
                <span>${employee.getRole()}</span>
                <span>#${employee.getId()}</span>
            </div>
            <div class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                
                <a href="mailto:${employee.getEmail()}" class="card-link"><i class="fas fa-envelope"></i> ${employee.getEmail()}
            </a><br>
            ${employee.getSpecial()}
            </div>
        </div>
    </div>`
    })
    return cards;
}

module.exports = team => {
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
                ${employeeCard(team.filter(employee => employee.getRole() === "Manager"))}
                </div>
                <div class="row justify-content-center">
                ${employeeCard(team.filter(employee => employee.getRole() === "Engineer"))}
                
                </div>
                <div class="row justify-content-center">
                ${employeeCard(team.filter(employee => employee.getRole() === "Intern"))}
                </div>
           
    </body>
    </html>`;
}