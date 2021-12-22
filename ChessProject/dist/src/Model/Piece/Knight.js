"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = void 0;
const ChessPiece_1 = require("./ChessPiece");
class Knight extends ChessPiece_1.Piece {
    constructor(pieceId, color, alive) {
        super(pieceId, color, alive);
    }
    validMovementPattern(board, startSpace, endSpace) {
        let rowSpacesMoved = Math.abs(startSpace.getRow() - endSpace.getRow());
        let columnSpacesMoved = Math.abs(startSpace.getColumn() - endSpace.getColumn());
        if (rowSpacesMoved * columnSpacesMoved === 2) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Knight = Knight;
//# sourceMappingURL=Knight.js.map