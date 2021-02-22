const inquirer = require("inquirer");
const questions = require('./lib/questions');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./utils/page-template');
const{ writeFile, copyFile,} = require('./utils/generate-site.js');

let team = [];

const promptUser = () => {
    console.log(`
    ========================
    Add Employee Information
    ========================
    `)

    return inquirer
        .prompt(questions)
        .then((employees) => {   
            switch (employees.role) {
                case 'Manager': {
                    let manager = new Manager();
                    manager.name = employees.name;
                    manager.role = employees.role;
                    manager.id = employees.id;
                    manager.email = employees.email;
                    manager.office = employees.office;
                } 
                case 'Engineer': {
                    let engineer = new Engineer();
                    engineer.name = employees.name;
                    engineer.role = employees.role;
                    engineer.id = employees.id;
                    engineer.email = employees.email;
                    engineer.github = employees.github;
                }
                case 'Intern': {
                    let intern = new Intern();
                    intern.name = employees.name;
                    intern.role = employees.role;
                    intern.id = employees.id;
                    intern.email = employees.email;
                    intern.school = employees.school;
                }
            }

            team.push(employees)

            if(employees.confirmAddEmployee) {
                return promptUser(employees);
            }

            return team;
        });
};
module.exports = team;

//function call to initialize app
promptUser()
  
  .then(data => {
    return generatePage(data);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
;