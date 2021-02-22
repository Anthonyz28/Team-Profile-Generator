const Manager = require('../lib/Manager');

test ('Checks manager info', () => {
    const manager = new Manager("Manager", "Tim", "01", 'test@email.com',"001");

    expect(manager.role).toEqual(expect.any(String));
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
});

test('Checks getOfficeNumber', () => {
    const manager = new Manager("Manager", "Tim", "01", 'test@email.com',"001");

    expect(manager.officeNumber).toBe('001')


});


test (' checks role', () => {
    const manager = new Manager("Manager", "Tim", "01", 'test@email.com',"001");

    expect(manager.role).toBe('Manager');
});