import Character from "../js/Character";
import Bowman from "../js/characters/Bowman";

test('check create new Bowman & throw error while creating new Character', () => {
    try {
        const received = new Bowman(1);
        console.log(received);
        expect(received).toEqual({
            level: 1,
            attack: 25,
            defence: 25,
            health: 50,
            type: 'bowman',
            travelRadius: 2,
            attackRadius: 2
          });
        const character = new Character(1);
    } catch (error) {
        expect(error.message).toBe('Недопустимый класс персонажа');
    }
})