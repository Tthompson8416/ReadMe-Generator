// Require generateMarkdown, inquirer, fs
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Licenses 

const apache = "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).";
const gnu    = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
const mit    = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
const isc    = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";


const questions = [
  {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'

  },
  {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project here:'

  },
  {
      type: 'input',
      name: 'installation',
      message: 'How is your software installed?'
  },
  {
      type: 'input',
      name: 'usage',
      message: 'How is your software used?'
  },
  {
      type: 'input',
      name: 'usage',
      message: 'How is your software used?'
  },
  {
      type: 'list',
      name: 'license',
      message: "What kind of license does your project have?",
      choices: ['MIT', 'Apache', 'GPL']
  },
  {
      type: 'input',
      name: 'contributions',
      message: 'Where can people contribute to this project?'
  },
  {
      type: 'input',
      name: 'test',
      message: 'How can a user test your software?'
  },
  {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub user name?'
  },
  {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
  },

];



// TODO: Create a function to write README file
function writeToFile(input) {
  var readMeText = `# ${input.title}
##Table of Contents 
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Testing](#testing)
[Questions](#questions)
## Description 
${input.description}
## Installation 
${input.installation}
## Usage
${input.usage}
## License
${input.license}
## Contributing
${input.contributions}
## Testing
${input.test}
## Questions 
(${input.github})
${input.email}`

  console.log(readMeText)

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
      .then((answers) => {
          writeToFile(answers)

      })

}

// Function call to initialize app
init();