const buildHtml = require('../src/buildhtml')
const Employee = require('./employee')

function Manager(name, id, email, number) {
    this.number = number;
    Employee.Employee.call(this, name, id, "Manager", email);
    this.buildHtml = buildHtml.ManagerHTML(this.name, this.id, this.email, this.number);
}

const manager = new Manager('Klauvdia', '001', 'manager@fakemail.com', '800-888-8888');
console.log(manager.buildHtml);

console.log(buildHtml.ManagerHTML("james", 1, "something@gmail.com", "555-5555"));