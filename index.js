// TODO: Include packages needed for this application
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What is the contribution guidelines?",
  },
  {
    type: "list",
    name: "license",
    message: "What is the license?",
    choices: ["MIT", "AFL-3.0", "Apache-2.0", "Artistic-2.0", "None"],
  },
  {
    type: "input",
    name: "username",
    message: "What is the Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Email address?"
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully created README file!".green);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(answers => {
      const markdown = generateMarkdown(answers);
      writeToFile("README.md", markdown);
    });
}

// Function call to initialize app
init();
