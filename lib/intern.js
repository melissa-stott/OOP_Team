const buildHtml = require('../src/buildhtml')
const Employee = require('./employee')

function Intern(name, id, email, university) {
    this.university = university;
    Employee.Employee.call(this, name, id, "Intern", university);
    this.buildHtml = buildHtml.InternHTML(this.name, this.id, this.email, this.university);
}

const intern = new Intern('Elena', '003', 'intern@fakemail.com', 'University of Oregon');
console.log(intern.buildHtml);

console.log(buildHtml.InternHTML("Melissa", 5, "melissa@fakemail.com", "University of Oregon"));