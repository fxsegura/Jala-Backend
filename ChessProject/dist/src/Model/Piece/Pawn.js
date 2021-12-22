"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const ChessPiece_1 = require("./ChessPiece");
class Pawn extends ChessPiece_1.Piece {
    constructor(pieceId, color, alive, firstMove) {
        super(pieceId, color, alive);
        this.firstMove = firstMove;
    }
    getFirstMove() {
        return this.firstMove;
    }
    toggleFirstMove() {
        this.firstMove = !this.firstMove;
    }
    validMovementPattern(board, startSpace, endSpace) {
        let rowSpacesMoved = Math.abs(startSpace.getRow() - endSpace.getRow());
        let columnSpacesMoved = Math.abs(startSpace.getColumn() - endSpace.getColumn());
        if (endSpace.getPiece() === null) {
            if (rowSpacesMoved !== 0) {
                return false;
            }
            if (this.getFirstMove() === false) {
                if (rowSpacesMoved > 1 || columnSpacesMoved !== 0)
                    return false;
            }
            else {
                if (rowSpacesMoved > 2 || columnSpacesMoved !== 0)
                    return false;
            }
        }
        else {
            if (columnSpacesMoved === rowSpacesMoved)
                return true;
            else {
                return false;
            }
        }
        return true;
    }
}
exports.Pawn = Pawn;
//# sourceMappingURL=Pawn.js.map