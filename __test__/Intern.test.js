const Intern = require('../lib/Intern');

test ('Checks intern info', () => {
    const intern = new Intern("Intern", "Tim", "01", 'test@email.com',"School");

    expect(intern.role).toEqual(expect.any(String));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
});

test('checks get school', () => {
    const intern = new Intern("Intern", "Tim", "01", 'test@email.com',"School");
    expect(intern.school).toBe('School');
});

test (' checks role', () => {
    const intern = new Intern("Intern", "Tim", "01", 'test@email.com',"School");

    expect(intern.role).toBe('Intern');
});