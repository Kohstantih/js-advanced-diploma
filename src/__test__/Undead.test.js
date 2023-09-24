import Undead from "../js/characters/Undead";

test('check create Undead', () => {
    const received = new Undead(1);
    console.log(received);
    expect(received).toEqual({
        level: 1,
        attack: 40,
        defence: 10,
        health: 50,
        type: 'undead',
        travelRadius: 4,
        attackRadius: 1
        });
})