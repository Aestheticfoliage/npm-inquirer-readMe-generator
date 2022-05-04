// these commands include the inquirer package and tells it to look in the file system as well ('fs')
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generatemarkdown");
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
      name: "languages",
      message: "please check the languages used in making this project",
      choices: ["HTML", "CSS", "Java", "Javascript"],
    },
    {
      type: "input",
      name: "usage",
      message: "Please describe in detail how this project will be used",
    },
  ])
  .then((data) => {
    let Create = `# ${data.title}

    ## Description
  
    ${data.description}
    
    ## Table of Contents (Optional)
    
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${data.Installation}
    
    ## Usage
    
   ${data.Usage}
    
    ## Credits
    
    ${data.Credits}
    
    ## License
    
    ${data.License}

    
    ## Badges
    
    ${data.Badges}
    
    ## Features
    
    ${data.features}
    
    ## How to Contribute
    
    ${data.contribute}
    `;
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writefile(filename, JSON.stringify(data, "\t"), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
