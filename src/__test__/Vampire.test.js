import Vampire from "../js/characters/Vampire";

test('check create Vampire', () => {
    const received = new Vampire(1);
    console.log(received);
    expect(received).toEqual({
        level: 1,
        attack: 25,
        defence: 25,
        health: 50,
        type: 'vampire',
        travelRadius: 2,
        attackRadius: 2
        });
})