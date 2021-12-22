"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Space = void 0;
class Space {
    constructor(row, column, piece) {
        this.row = row;
        this.column = column;
        this.piece = piece;
    }
    getPiece() {
        return this.piece;
    }
    setPiece(piece) {
        this.piece = piece;
    }
    getRow() {
        return this.row;
    }
    setRow(row) {
        this.row = row;
    }
    getColumn() {
        return this.column;
    }
    setColumn(column) {
        this.column = column;
    }
    getEmpty() {
        return this.empty;
    }
    setEmptyToggle() {
        this.empty = !this.empty;
    }
}
exports.Space = Space;
//# sourceMappingURL=Space.js.map