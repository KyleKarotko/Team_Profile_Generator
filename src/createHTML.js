const Employee = require("../lib/Employee");
rosterHTML = [];

// function to loop through roster and make cards for employees entered

function cards(team) {
 
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      const managerCard = `
    <div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="text-danger card-title">Manager</h5>
     <p class="card-text">${team[i].getName()}</p>
     <p class="card-text">${team[i].getRole()}</p>
     <a href="mailto:${team[i].getEmail()}" class="card-link">${team[i].getEmail()}</a>
     <p class="card-text">${team[i].getOfficeNumber()}</p>
   </div>
 </div>`;
 rosterHTML.push(managerCard);
    } else if (team[i].getRole() === "Engineer") {
      const engineerCard = `
             <div class="row">
   <div class="col-sm-6">
     <div class="card">
       <div class="card-body">
         <h5 class="text-warning card-title">Engineer</h5>
         <p class="card-text">${team[i].getName()}</p>
         <p class="card-text">${team[i].getRole()}</p>
         <p class="card-text">${team[i].getID()}</p>
         <a href="mailto:${team[i].getEamil()}" class="card-link">${team[i].getEamil}</a>      </div>
         <a href="https://www.github.com/${team[i].getGitHub()}" class="card-link">${team[i].getGitHub()}</a>
               </div>
     </div>
   </div>`;
   rosterHTML.push(engineerCard);
    } else if (team[i].getRole() === "Intern") {
      const internCard = `
             <div class="row">
             <div class="col-sm-6">
               <div class="card">
                 <div class="card-body">
                   <h5 class="text-warning card-title">Intern</h5>
                   <p class="card-text">${team[i].getName()}</p>
                   <p class="card-text">${team[i].getRole()}</p>
                   <p class="card-text">${team[i].getID()}</p>
                   <p class="card-text">${team[i].getSchool()}</p>
                   <a href="mailto:${team[i].getEamil()}" class="card-link">${team[i].getEamil}</a>      </div>
               </div>
             </div>`;
             rosterHTML.push(internCard);
    }

    return rosterHTML.join("");
  }
  // function to create the HTML file with responses from prompts
}
function createHtml(answers) {
  return `
 <!DOCTYPE html>
 <html lang="en">

 <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Team</title>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>
 <body>
 <header>
 <h1 class= 'text-success display-4 font-weight-bold text-center'> Team Roster </h1>
 </header>
 <div class="container">
 ${cards(answers)}
 </body>
 </html>`;
}

module.exports = createHtml;