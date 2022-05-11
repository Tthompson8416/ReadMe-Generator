const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const apache = "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).";
const gnu    = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
const mit    = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
const isc    = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";


const questions = [
  {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project?'

  },
  {
      type: 'input',
      name: 'description',
      message: 'Write a short description of your project here:'

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
      type: 'list',
      name: 'license',
      message: "What kind of license does your project use?",
      choices: ['MIT', 'GNU', 'ISC']
  },
  {
      type: 'input',
      name: 'contributions',
      message: 'How can people contribute to the project?'
  },
  {
      type: 'input',
      name: 'test',
      message: 'How can a user test your software?'
  },
  {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub user name?'
  },
  {
      type: 'input',
      name: 'email',
      message: 'Enter your email address?'
  },

];



function writeToFile(readMeText) {



fs.writeFile("README.md", readMeText, (err) => {
    console.log(err)
})

  console.log(readMeText)

}

function init() {
  inquirer.prompt(questions)
      .then((answers) => {
          const md = generateMarkdown(answers)
        
          writeToFile(md)

      })

}

init();