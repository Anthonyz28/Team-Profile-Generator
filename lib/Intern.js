const Employee = require('./Employee');

class Intern extends Employee {
    constructor(role, name, id, email, school){
        super(role, name, id , email)

        this.school = school;
        this.role = 'Intern';
    }
    getSchool(){
        return{
            school: this.school
        }
    }

    getRole() {
        return {
            role: this.role
        }
    }
}

module.exports = Intern;