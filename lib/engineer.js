const buildHtml = require('../src/buildhtml')
const Employee = require('./employee')

function Engineer(name, id, email, githubName) {
    this.githubName = githubName
    Employee.Employee.call(this, name, id, "Engineer", githubName);
    this.buildHtml = buildHtml.EngineerHTML(this.name, this.id, this.email, this.githubName);
}

const engineer = new Engineer('Fenya', '002', 'engineer@fakemail.com', 'fenya101');
console.log(engineer.buildHtml);

console.log(buildHtml.EngineerHTML("Cora", 3, "cora@fakemail.com", "coraes"));
