// Node system is wrapped around this function basically
// (function (exports, require, module, __filename, __dirname) {
    // use modeule.exports - to export a function code for use in other module file
    // use require to extentiate a module thus gaining access to the function in that module

// });

class Person {
    constructor(name, age) {
        this.name = name;
        this.age  = age;
    }
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

module.exports = Person;
