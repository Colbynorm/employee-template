class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee"
    }
}

// const roger = new Employee("roger", 5, "roger@aol.com")

// console.log(roger)
// console.log(roger.getEmail())
// console.log(roger.email)

module.exports = Employee;
