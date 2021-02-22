
const Employee = require('../lib/Employee');

//checks employee info
test ('Checks employee info', () => {
    const employee = new Employee('Employee', 'Tim', '01', 'test@email.com');

    expect(employee.role).toEqual(expect.any(String));
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

//checks name

test('Checks getName', () => {
    const employee = new Employee('Employee', 'Tim', '01', 'test@email.com');

    expect(employee.getName()).toHaveProperty('name');
    expect(employee.name).toBe('Tim');

});

test('checks getId', () => {
    const employee = new Employee('Employee', 'Tim', '01', 'test@email.com');

    expect(employee.getId()).toHaveProperty('id');
    expect(employee.id).toBe('01');
    
});

test('checks getEmail', () => {
    const employee = new Employee('Employee', 'Tim', '01', 'test@email.com');

    expect(employee.getEmail()).toHaveProperty('email');
    expect(employee.email).toBe('test@email.com');
});