const Manager = require('../lib/Manager');
test ('testing manager values', () => {
    const manager = new Manager ('Nate', 444, 'manager@email.com', '555-678-1234');
    expect (manager.officeNumber).toBe('555-678-1234')
    expect (manager.getOfficeNumber()).toBe('555-678-1234')
})