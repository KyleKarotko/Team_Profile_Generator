const Employee = require('../lib/Employee')

test ('Test of Employee values', () =>{
    const employee = new Employee('Mark', 333, 'markymark@gmail.com')
    expect (employee.name).toBe('Mark')
    expect (employee.id).toBe(333)
    expect (employee.email).toBe('markymark@gmail.com')
    expect (employee.getName()).toBe('Mark')
    expect (employee.getId()).toBe(333)
    expect (employee.getEmail()).toBe('markymark@gmail.com')
})