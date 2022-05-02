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
    let Create = `# <Your-Project-Title>

    ## Description
    
    Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    
    - What was your motivation?
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?
    
    ## Table of Contents (Optional)
    
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    
    ## Usage
    
    Provide instructions and examples for use. Include screenshots as needed.
    
    To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
        ```md
        ![alt text](assets/images/screenshot.png)
        ```
    
    ## Credits
    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    
    ## License
    
    The last section of a high-quality R

    
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
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
