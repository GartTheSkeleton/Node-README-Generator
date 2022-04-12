// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
         type: 'input',
         name: 'title',
         message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please enter any pertinent installation info."
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about your project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    } ,
    {
        type: 'list',
        name: 'license',
        message: "Which Liscence does your project use?",
        choices: ["GNU_AGPLv3", "GNU_GPLv3", "Mozilla_Public_License_2.0", "Apache_License_2.0", "MIT_License"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log("Generating...");
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    })
}

// Function call to initialize app
init();
