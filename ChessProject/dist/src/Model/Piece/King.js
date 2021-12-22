"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
const ChessPiece_1 = require("./ChessPiece");
class King extends ChessPiece_1.Piece {
    constructor(pieceId, color, alive) {
        super(pieceId, color, alive);
    }
    validMovementPattern(board, startSpace, endSpace) {
        let rowSpacesMoved = Math.abs(startSpace.getRow() - endSpace.getRow());
        let columnSpacesMoved = Math.abs(startSpace.getColumn() - endSpace.getColumn());
        if ((rowSpacesMoved === 1 && columnSpacesMoved === 1) || (rowSpacesMoved === 1 && columnSpacesMoved === 0) || (rowSpacesMoved === 0 && columnSpacesMoved === 1)) {
            return true;
        }
        else
            return false;
    }
}
exports.King = King;
//# sourceMappingURL=King.js.map