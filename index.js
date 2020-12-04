//setting up variables and requires
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const questions = require('./utils/questions')
const axios = require('axios');

// function to write README file
function writeToFile(fileName, data) {
    //taking input from user and generating the readme with fs
    const readmecontent = generateMarkdown(data)
    fs.writeFile(fileName, readmecontent, function(error) {
        if (error)
        throw error

        console.log("README.md generated!")
    })
}

// function to initialize program
function init() {
    //running inquirer to prompt questions
    inquirer.prompt(questions).then(function (data) {
        //using axios to retrieve users github url
        axios.get("https://api.github.com/users/"+ data.username).then(function(results) {
            data.profile = results.data.html_url
            writeToFile("./README.md", data)
        })
        console.log(data)
    })
}

// function call to initialize program
init();