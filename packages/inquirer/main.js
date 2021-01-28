let inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: 'list',
            message: 'Pick the project type:',
            name: 'project_type',
            choices: [
                "Graphic Design",
                "Web Development",
                "App Development",
                "SEO"
            ]
        }
    ])
    .then(answers => {
        console.log(answers.project_type);
    });