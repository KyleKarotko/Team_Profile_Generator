const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const team = []

const mainMenu = () => {

}
// function to ask manager info
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
// function to ask if there are more employees to add to the roster
const updateRoster = () => {
    inquirer.prompt ([
        {
            
                type: "list",
                name: "roster",
                message: "What type of employee would you like to add?",
                choices: ['intern', 'engineer', 'Roster Complete']
            
        },
    ])
    // if intern selected, prompt intern questions
    .then((response) => {
        if (response.roster === 'intern') {
            askIntern();
        }
    // if engineer selected, prompt engineer questions
        if (response.roster === 'engineer') {
            askEngineer();
        }
    // if Roster complete selected, write file
        if (response.roster === 'Roster Complete') {
            writeFile(team);
        }
    }
    )
}

// function to ask engineer questions
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
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.gitHub)
        team.push(engineer)
        updateRoster()
    })
}
// function to ask intern questions
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
      
    ]) .then(answers => {
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
        team.push(intern)
        updateRoster()
    })
}

function init () {
askManager()
}

init();