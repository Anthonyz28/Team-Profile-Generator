const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(role, name, id , email, github){
        super(role, name, id, email)

        this.github = github;
        this.role = 'Engineer';

    }

    getGithub(){
        return{
            github: this.github
        }
    }


    getRole() {
        return{
            role: this.role
        }
    }
}

module.exports = Engineer;