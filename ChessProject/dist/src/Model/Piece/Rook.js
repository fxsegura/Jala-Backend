"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rook = void 0;
const ChessPiece_1 = require("./ChessPiece");
class Rook extends ChessPiece_1.Piece {
    constructor(pieceId, color, alive) {
        super(pieceId, color, alive);
    }
    validMovementPattern(board, startSpace, endSpace) {
        let rowSpacesMoved = Math.abs(startSpace.getRow() - endSpace.getRow());
        let columnSpacesMoved = Math.abs(startSpace.getColumn() - endSpace.getColumn());
        if (rowSpacesMoved !== 0 && columnSpacesMoved !== 0) {
            return false;
        }
        else
            return true;
    }
}
exports.Rook = Rook;
//# sourceMappingURL=Rook.js.map