const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your username?'
    }
]

inquirer.prompt(questions).then(function (data) {
    console.log(data)
})
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();