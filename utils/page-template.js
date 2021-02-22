const fs = require('fs');
const team = require('../index');

const generateManger = teamArr =>{
    
        .filter(({ role }) => role === 'Manager')
        .map(({ name, id, email, officeNumber }) => {
            return `
    <div class="manager">
        <h2>${name}</h2>
        <h3>Manager</h3>
        <div>
            <p>ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>Office Number: ${officeNumber}</p>
        </div>
    </div>
    `;
        })
    .join('')
    
const generateEngineer = teamArr =>{
    ${teamArr
        .filter(({ role }) => role === 'Engineer')
        .map(({ name, id, email, github }) => {
            return `
    <div class="engineer">
        <h2>${name}</h2>
        <h3>Engineer</h3>
        <div>
            <p>ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>GitHub: ${github}</p>
        </div>
    </div>
    `;
        })
    .join('')}

    
const generateIntern = teamArr =>{
    teamArr
        .filter(({ role }) => role === 'Intern')
        .map(({ name, id, email, school}) => {
            return `
    <div class="intern">
        <h2>${name}</h2>
        <h3>Intern</h3>
        <div>
            <p>ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>School: ${school}</p>
        </div>
    </div>
    `;
        })
    .join('')}


            



function generatePage(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Team</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
           
       ${generateManger}
       ${generateEngineer}
       ${generateIntern}

        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Anthony Martinez</h3>
        </footer>
    </body>
    </html>`
};

module.exports = generatePage;