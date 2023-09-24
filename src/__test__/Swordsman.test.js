import Swordsman from "../js/characters/Swordsman";

test('check create Swordsman', () => {
    const received = new Swordsman(1);
    console.log(received);
    expect(received).toEqual({
        level: 1,
        attack: 40,
        defence: 10,
        health: 50,
        type: 'swordsman',
        travelRadius: 4,
        attackRadius: 1
        });
})