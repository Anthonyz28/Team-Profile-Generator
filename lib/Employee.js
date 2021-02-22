

class Employee {
    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return {
            name: this.name
        }
    }
        
    getId() {
        return {
            id: this.id
        }
    }
        

    getEmail(){ 
        return {
            email: this.email
        }
    }
}

module.exports = Employee;