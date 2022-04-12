// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return`\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return  `## License
    
    This project is licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#
  ${renderLicenseBadge(data.license)}
  
  ${data.title}

  ## Description
  ---
  ${data.description}

  ## Table of Contents (Optional)
  ---
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)


  ## Installation
  ---
  ${data.installation}

  ## Usage
  ---
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ---
  ${data.contributing}

  ## Questions
  ---
  Direct any questions to [My Github](#https://github.com/${data.github}) or email me at [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
