"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../src/Model/Player/Player");
describe('Player', () => {
    const player = new Player_1.Player("1", "Pepito", "white", true);
    it('Test getters and setters', () => {
        expect(player.getColor).toEqual("white");
    });
});
//# sourceMappingURL=player.test.js.map