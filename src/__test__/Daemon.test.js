import Daemon from "../js/characters/Daemon";

test('check create Daemon', () => {
    const received = new Daemon(1);
    console.log(received);
    expect(received).toEqual({
        level: 1,
        attack: 10,
        defence: 10,
        health: 50,
        type: 'daemon',
        travelRadius: 1,
        attackRadius: 4
        });
})
