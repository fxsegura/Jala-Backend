"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(playerID, playerName, color, activeTurn) {
        this.playerID = playerID;
        this.playerName = playerName;
        this.color = color;
        this.activeTurn = activeTurn;
    }
    getID() {
        return this.playerID;
    }
    setID(playerID) {
        this.playerID = playerID;
    }
    getName() {
        return this.playerName;
    }
    setName(playerName) {
        this.playerName = playerName;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getTurn() {
        return this.activeTurn;
    }
    setTurn(active) {
        this.activeTurn = active;
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map