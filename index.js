// these commands include the inquirer package and tells it to look in the file system as well ('fs')
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "what is the title of your project",
    },
    {
      type: "input",
      name: "description",
      message: "Please add a detailed description of your project",
    },
    {
      type: "checkbox",
      name: "license",
      message: "please select a license to include in this project",
      choices: ["MIT", "GNU", "Apache"],
    },
    {
      type: "input",
      name: "credits",
      message:
        "Please include anyone who you would like to give credit to for helping you with this project",
    },
    {
      type: "checkbox",
      name: "languages used in making this project",
      choices: ["HTML", "CSS", "Java", "Javascript"],
    },
  ])
  .then((data) => {
    console.log(data.name);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
