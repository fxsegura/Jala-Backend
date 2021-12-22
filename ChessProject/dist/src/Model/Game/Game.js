"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(board, player1, player2) {
        this.status = "Ready to Play";
        this.board = board;
        this.player1 = this.player1;
        this.player2 = this.player2;
        this.turn = 0;
    }
    increaseTurnCount() {
        this.turn = this.turn + 1;
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map