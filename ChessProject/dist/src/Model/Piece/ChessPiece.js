"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
class Piece {
    constructor(pieceId, pieceColor, alive) {
        this.setID(pieceId);
        this.setColor(pieceColor);
        this.setAlive(alive);
    }
    getID() {
        return this.pieceId;
    }
    setID(pieceID) {
        this.pieceId = pieceID;
    }
    getColor() {
        return this.pieceColor;
    }
    setColor(color) {
        this.pieceColor = color;
    }
    getAlive() {
        return this.alive;
    }
    setAlive(alive) {
        this.alive = alive;
    }
    validEndSpace(board, endSpace) {
        if (endSpace.getEmpty() === true) {
            return true;
        }
        if (this.getColor() === endSpace.getPiece().getColor()) {
            return false;
        }
        else {
            return true;
        }
    }
    move(board, startSpace, endSpace) {
        if (this.validEndSpace(board, endSpace) === true && this.validMovementPattern(board, startSpace, endSpace) === true) {
            board.getSpaceData(startSpace.getRow(), startSpace.getColumn()).setPiece(null);
            board.getSpaceData(endSpace.getRow(), endSpace.getColumn()).setPiece(this);
        }
    }
}
exports.Piece = Piece;
//# sourceMappingURL=ChessPiece.js.map