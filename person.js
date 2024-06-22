class Person {
    constructor(name) {
        this.name = name;
    }

    saymyname() {
        return `My name is ${this.name}!`
    }
}

module.exports = {
    Person,
    
}