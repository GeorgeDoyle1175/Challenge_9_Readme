// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'What is the name of your project?'
  },
  {
    name: 'description',
    type: 'input',
    message: 'Provide a brief description of your project:'
  },
  {
    name: 'installation',
    type: 'input',
    message: 'What is the installation process?'
  },
  {
    name: 'usage',
    type: 'input',
    message: 'How is the project used?'
  },
  {
    name: 'license',
    type: 'input',
    message: 'What license does your project use?'
  },
  {
    name: 'github',
    type: 'input',
    message: 'What is your GitHub username?'
  },
  {
    name: 'email',
    type: 'input',
    message: 'What is your email address?'
  }
];

function init() {
    inquirer.prompt(questions).then(answers => {
      let readme = `# ${answers.title}

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  This project uses the ${answers.license} license.

  ## Questions
  For any additional questions, please reach out to me at [${answers.github}](https://github.com/${answers.github}) or by email at ${answers.email}.
  `;

      writeToFile('README.md', readme);
    });
  }

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        return console.error(err);
      }

      console.log(`${fileName} generated successfully!`);
    });
  }

  // Function call to initialize app
  init();
