import Magician from "../js/characters/Magician";

test('check create Magician', () => {
    const received = new Magician(1);
    console.log(received);
    expect(received).toEqual({
        level: 1,
        attack: 10,
        defence: 40,
        health: 50,
        type: 'magician',
        travelRadius: 1,
        attackRadius: 4
        });
})