"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bishop = void 0;
const ChessPiece_1 = require("./ChessPiece");
class Bishop extends ChessPiece_1.Piece {
    constructor(pieceId, color, alive) {
        super(pieceId, color, alive);
    }
    validMovementPattern(board, startSpace, endSpace) {
        let rowSpacesMoved = Math.abs(startSpace.getRow() - endSpace.getRow());
        let columnSpacesMoved = Math.abs(startSpace.getColumn() - endSpace.getColumn());
        if (rowSpacesMoved === columnSpacesMoved) {
            return true;
        }
        else
            return false;
    }
}
exports.Bishop = Bishop;
//# sourceMappingURL=Bishop.js.map