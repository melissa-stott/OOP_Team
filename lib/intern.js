function Intern(name, id, email, university) {
    this.university = university;
    Employee.call(this, name, id, "Intern", email);
    this.buildHtml = function buildHtml() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.title);
        console.log(this.email);
        console.log(this.university);
        console.log(`<div>${this.name}</div>`);
      }
}

const intern = new Intern('Elena', '003', 'intern@fakemail.com', 'University of Oregon');
intern.buildHtml();