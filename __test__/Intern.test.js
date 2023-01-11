const Intern = require('../lib/intern');
test ('testing intern values', () => {
    const intern = new Intern ('Nate', 444, 'intern@email.com', 'TheUniv');
    expect (intern.school).toBe('TheUniv')
    expect (intern.getSchool()).toBe('TheUniv')
})