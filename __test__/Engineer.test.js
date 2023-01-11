const Engineer = require('../lib/Engineer');
test ('testing engineer values', () => {
    const engineer = new Engineer ('Nate', 444, 'engineer@email.com', 'GitUser7');
    expect (engineer.gitHub).toBe('GitUser7')
    expect (engineer.getGitHub()).toBe('GitUser7')
})