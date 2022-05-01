// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
} else if (license === "apache") {
  return `![License: apache](https://img.shields.io/badge/License-apache-blue.svg)`;
} else if (license === "GNU") {
  return `![License: GNU](https://img.shields.io/badge/License-GNU-green.svg)`; 
} else if (license === "ISC") {
  return `![License: ISC](https://img.shields.io/badge/License-ISC-red.svg)`;
  
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
//   if (licenseLink === "MIT") {
//     return `[MIT License](https://spdx.org/licenses/MIT.html)."`;
//   }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


  ## Description
  
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  ## Usage
  
  
  
  
    
  ## Contributing
  
  
  
  ## Tests
  
  To run tests, run the following command:
  
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at 
     
    You can find more of my work at [${data.github}](https://github.com/$}`
    
  
}

module.exports = generateMarkdown;
