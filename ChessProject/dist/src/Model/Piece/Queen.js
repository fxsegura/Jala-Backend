"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const ChessPiece_1 = require("./ChessPiece");
class Queen extends ChessPiece_1.Piece {
    constructor(pieceId, color, alive) {
        super(pieceId, color, alive);
    }
    validMovementPattern(board, startSpace, endSpace) {
        let rowSpacesMoved = Math.abs(startSpace.getRow() - endSpace.getRow());
        let columnSpacesMoved = Math.abs(startSpace.getColumn() - endSpace.getColumn());
        if (rowSpacesMoved != columnSpacesMoved) {
            if (rowSpacesMoved !== 0 && columnSpacesMoved !== 0) {
                return false;
            }
        }
        else
            return true;
    }
}
exports.Queen = Queen;
//# sourceMappingURL=Queen.js.map