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
        updateRoster()
    })
}
const updateRoster = () => {
    inquirer.prompt ([
        {
            
                type: "list",
                name: "roster",
                message: "What type of employee would you like to add?",
                choices: ['intern', 'engineer', 'Roster Complete']
            
        },
    ])
    .then((response) => {
        if (response.roster === 'intern') {
            askIntern();
        }
        if (response.roster === 'engineer') {
            askEngineer();
        }
        if (response.roster === 'Roster Complete') {
            writeFile(team);
        }
    }
    )
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
    ]) .then(answers => {
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(engineer)
        updateRoster()
    })
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
        {
            type: "list",
            name: "roster",
            message: "What type of employee would you like to add?",
            choices: ['intern', 'engineer', 'Roster Complete']
        },
    ]) .then(answers => {
        const intern = new Intern (answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(intern)
        updateRoster()
    })
}

askManager()