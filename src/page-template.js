
function managerHtml(manager) {
    //returns manager html block
    return `Manager: ${manager}`;
}

function engineerHtml(engineers) {
    //returns engineer html block
    return `Engineers: ${engineers}`;
}

function internHtml(interners) {
    //returns interns html block
    return `Interns: ${interners}`;
}

module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team</title>
    </head>
    <body>
        <div id="manager">${managerHtml(team.manager)}</div>
        <div id="engineers">${engineerHtml(team.engineers)}</div>
        <div id="interns">${internHtml(team.interns)}</div>
    
    </body>
    </html>`;
}