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

module.exports.Employee = Employee