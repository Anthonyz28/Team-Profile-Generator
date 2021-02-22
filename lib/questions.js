const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What role does this Employee have?',
        choices: ['Manager','Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the Employee's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the Employee's id."
    },
    {  
        type: 'input',
        name: 'email',
        message: "Please enter the Employee's Email."
    },
    
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's office number?",
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does the Intern attend?",
        when: (answers) => answers.role === 'Intern'
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's Github Username?",
        when: (answers) => answers.role === 'Engineer'
    },
    // add more employees
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: "Do you want to add another Employee?",
        default: false
    }
]

module.exports = questions;