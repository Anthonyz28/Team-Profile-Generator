const Employee = require('./Employee');

class Manager extends Employee {
    constructor(role, name, id, email , officeNumber){
        super(role, name, id, email)

        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber(){
        return{
            officeNumber: this.officeNumber
        }
    }

    getRole(){
        return{
            role: this.role
        }
    }
}

module.exports = Manager;