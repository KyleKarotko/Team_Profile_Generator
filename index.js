const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const team = []

const mainMenu = () => {

}

const askManager = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter Employee name",
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee id",
        },
        {
            type: "input",
            name: "email",
            message: "Enter Employee email",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter Employee office number",
        },
    ]).then(answers => {
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(manager)
        mainMenu()
    })
}
const askEngineer = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter Employee name",
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee id",
        },
        {
            type: "input",
            name: "email",
            message: "Enter Employee email",
        },
        {
            type: "input",
            name: "gitHub",
            message: "Enter Employee github",
        },
    ])
}
const askIntern = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter Employee name",
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee id",
        },
        {
            type: "input",
            name: "email",
            message: "Enter Employee email",
        },
        {
            type: "input",
            name: "school",
            message: "Enter Employee school",
        },
    ])
}

mainMenu()