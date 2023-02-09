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
    type: 'list',
    message: 'What license does your project use?',
    choices: [
      'Apache License v2',
      'GNU General Public License v3',
      'MIT License'
    ]
  },
  {
    name: 'contributing',
    type: 'input',
    message: 'Who has contributed to this project?'
  },
  {
    name: 'test',
    type: 'input',
    message: 'What should you enter into the command line to test this application?'
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
    let licenseBadge = '';
    let licenseLink = '';
    switch (answers.license) {
      case 'Apache License v2':
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        licenseLink = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case 'GNU General Public License v3':
        licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
        break;
      case 'MIT License':
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        licenseLink = 'https://opensource.org/licenses/MIT';
        break;
    }

    let readme = `${licenseBadge}

# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project uses the ${answers.license} license, available under [${licenseLink}](${licenseLink}).

## Contributing
${answers.contributing}

## Tests
To test this code enter ${answers.test} in the command line when are in the folder with the index.js file.
\`\`\`
${answers.test}
\`\`\`


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
