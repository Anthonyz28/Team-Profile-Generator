const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test ('Checks engineer info', () => {
    const engineer = new Engineer("Engineer", "Tim", "01", 'test@email.com',"TimHub");

    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
});

test ('checks github', () => {
    const engineer = new Engineer("Engineer", "Tim", "01", 'test@email.com',"TimHub");

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.github).toBe('TimHub');
});

test (' checks role', () => {
    const engineer = new Engineer("Engineer", "Tim", "01", 'test@email.com',"TimHub");

    expect(engineer.role).toBe('Engineer');
});