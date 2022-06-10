// Function that returns a license badge based on which license is passed in - if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `
    ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
    `;
  }
}

// Function that returns the license link - if there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ``;
  }
  return `* [License](#license)`;
}

// Function that returns the license section of README - if there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  }
  return `
  This project is licensed under the ${license} license.
  `;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    tests,
    github,
    email,
  } = data;
  return `
  # ${title}
  ${renderLicenseBadge(license)}

  ## Description

  ${description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  The following information is a step-by-step description of how to get the development environment running:

  ${installation}

  ## Usage

  The following information are instructions and examples for how to use the application:

  ${usage}

  ## License

  ${renderLicenseSection(license)}

  ## Contributing

  The following information shows how to contribute to the application:

  ${contributing}

  ## Tests

  Examples on how to run tests:

  ${tests}

  ## Questions?

  Please feel free to email, ${email}, with additional questions about the project, or find more information about other projects on [Github](github.com/${github}).
`;
}

module.exports = generateMarkdown;
