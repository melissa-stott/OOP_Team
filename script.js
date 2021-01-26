const inquirer = require('inquirer')
const jest = require('jest');
const fs = require('fs');

const managerQuestions = [
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your employee ID#?',
            name: 'ID',
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'number',
        },
    ]
    function handleAnswers(answers){
        console.log(`${answers.name} ${answers.title} ${answers.ID} ${answers.number}`);
    }
    inquirer.prompt(managerQuestions).then(handleAnswers);    