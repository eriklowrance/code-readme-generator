const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const questions = require('./utils/questions')
const axios = require('axios');

// function to write README file
function writeToFile(fileName, data) {
    const readmecontent = generateMarkdown(data)
    fs.writeFile(fileName, readmecontent, function(error) {
        if (error)
        throw error

        console.log("README.md generated!")
    })
}

// function to initialize program
function init() {

    inquirer.prompt(questions).then(function (data) {
        axios.get("https://api.github.com/users/"+ data.username).then(function(results) {
            data.profile = results.data.html_url
            writeToFile("./README.md", data)
        })
        console.log(data)
    })
}

// function call to initialize program
init();