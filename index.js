// packages needed for application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// array of questions to ask user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter the name of your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project? (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter the description of your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the installation instructions for your project? (Required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log(
          "Please enter the installation instructions of your project."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please describe the usage information for your project: (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter the usage information of your project.");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Which license is your project under? (Required)",
    choices: ["MIT", "GNU", "Rust", "ISC", "Apache"],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please choose the license of your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Please describe the contributing guidelines for your project: (Required)",
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log(
          "Please enter the contributing guidelines for your project."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide testing guidelines for your project: (Required)",
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log("Please enter the testing guidelines of your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username? (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email.");
        return false;
      }
    },
  },
];

// Function to write README file
function writeToFile(data) {
  fs.writeFile("./dist/README.md", data, (err) => {
    if (err) throw new Error(err);
    console.log("Page created! Checkout README.md in the dist directory!");
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      return generateMarkdown(answers);
    })
    .then((pageMarkdown) => {
      return writeToFile(pageMarkdown);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
