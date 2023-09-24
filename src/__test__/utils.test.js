import {calcTileType} from "../js/utils.js"

test.each([
    [0, 8, 'top-left'],
    [3, 8, 'top'],
    [7, 8, 'top-right'],
    [32, 8, 'left'],
    [56, 8, 'bottom-left'],
    [39, 8, 'right'],
    [60, 8, 'bottom'],
    [63, 8, 'bottom-right'],
    [7, 7, 'left'],
    [36, 8, 'center']
])('check utils.js', (index, boardSize, expected) => {
    const received = calcTileType(index, boardSize);
    expect(received).toBe(expected);
});