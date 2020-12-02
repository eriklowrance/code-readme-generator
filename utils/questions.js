module.exports = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a briief description of your project?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give a brief description on how to use your project?'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'What are the contribution guidlines for this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license is being used?',
        choices: ["Apache", "MIT", "GNU", "WTFPL", "Unlicense"]
    }
]