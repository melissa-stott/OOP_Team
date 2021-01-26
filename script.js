const inquirer = require('inquirer')
const jest = require('jest');
const fs = require('fs');

function Employee(name, id, title, email) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
    this.buildHtml = function buildHtml() {
      console.log(this.name);
      console.log(this.id);
      console.log(this.title);
      console.log(this.email);
    }
}

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

const manager = new Manager('Klauvdia', '001', 'manager@fakemail.com', '800-888-8888');
manager.buildHtml();

const engineer = new Engineer('Fenya', '002', 'engineer@fakemail.com', 'fenya101');
engineer.buildHtml();

const intern = new Intern('Elena', '003', 'intern@fakemail.com', 'University of Oregon');
intern.buildHtml();