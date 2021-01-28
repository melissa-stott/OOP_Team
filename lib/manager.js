function Manager(name, id, email, number) {
    this.number = number;
    Employee.call(this, name, id, "Manager", email);
    this.buildHtml = function buildHtml() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.title);
        console.log(this.email);
        console.log(this.number);
        console.log(`<div>${this.name}</div>`);
      }
}

const manager = new Manager('Klauvdia', '001', 'manager@fakemail.com', '800-888-8888');
manager.buildHtml();