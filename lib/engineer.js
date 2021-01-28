function Engineer(name, id, email, githubName) {
    this.githubName = githubName
    Employee.call(this, name, id, "Engineer", email);
    this.buildHtml = function buildHtml() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.title);
        console.log(this.email);
        console.log(this.githubName);
        console.log(`<div>${this.name}</div>`);
      }
}

const engineer = new Engineer('Fenya', '002', 'engineer@fakemail.com', 'fenya101');
engineer.buildHtml();
