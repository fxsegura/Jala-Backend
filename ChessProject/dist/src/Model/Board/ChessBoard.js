"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessBoard = void 0;
const Bishop_1 = require("../Piece/Bishop");
const King_1 = require("../Piece/King");
const Knight_1 = require("../Piece/Knight");
const Pawn_1 = require("../Piece/Pawn");
const Queen_1 = require("../Piece/Queen");
const Rook_1 = require("../Piece/Rook");
const Space_1 = require("./Space");
class ChessBoard {
    constructor() {
        this.resetBoard();
    }
    getDataForAllSpaces() {
        for (let i = 0; i <= 7; i++) {
            for (let j = 0; j <= 7; j++) {
                console.log(this.spaces[i][j]);
            }
        }
    }
    getSpaceData(row, column) {
        return this.spaces[row][column];
    }
    resetBoard() {
        //Set White Pieces
        this.spaces[0][0] = new Space_1.Space(0, 0, new Rook_1.Rook("WLRook", "white", true));
        this.spaces[0][1] = new Space_1.Space(0, 1, new Knight_1.Knight("WLKnight", "white", true));
        this.spaces[0][2] = new Space_1.Space(0, 2, new Bishop_1.Bishop("WLBishop", "white", true));
        this.spaces[0][3] = new Space_1.Space(0, 3, new King_1.King("WKing", "white", true));
        this.spaces[0][4] = new Space_1.Space(0, 4, new Queen_1.Queen("WQueen", "white", true));
        this.spaces[0][5] = new Space_1.Space(0, 5, new Bishop_1.Bishop("WRBishop", "white", true));
        this.spaces[0][6] = new Space_1.Space(0, 6, new Knight_1.Knight("WRKnight", "white", true));
        this.spaces[0][7] = new Space_1.Space(0, 7, new Rook_1.Rook("WRRook", "white", true));
        for (let i = 0; i <= 7; i++) {
            this.spaces[1][i] = new Space_1.Space(1, i, new Pawn_1.Pawn("WPawn" + i.toString(), "white", true, true));
        }
        //Set Black Pieces
        this.spaces[7][0] = new Space_1.Space(7, 0, new Rook_1.Rook("BLRook", "white", true));
        this.spaces[7][1] = new Space_1.Space(7, 1, new Knight_1.Knight("BLKnight", "white", true));
        this.spaces[7][2] = new Space_1.Space(7, 2, new Bishop_1.Bishop("BLBishop", "white", true));
        this.spaces[7][3] = new Space_1.Space(7, 3, new King_1.King("BKing", "white", true));
        this.spaces[7][4] = new Space_1.Space(7, 4, new Queen_1.Queen("BQueen", "white", true));
        this.spaces[7][5] = new Space_1.Space(7, 5, new Bishop_1.Bishop("BRBishop", "white", true));
        this.spaces[7][6] = new Space_1.Space(7, 6, new Knight_1.Knight("BRKnight", "white", true));
        this.spaces[7][7] = new Space_1.Space(7, 7, new Rook_1.Rook("BRRook", "white", true));
        for (let i = 0; i <= 7; i++) {
            this.spaces[6][i] = new Space_1.Space(6, i, new Pawn_1.Pawn("BPawn" + i.toString(), "white", true, true));
        }
        //Blank Spaces
        for (let i = 2; i < 6; i++) {
            for (let j = 0; j < 8; j++) {
                this.spaces[i][j] = new Space_1.Space(i, j, null);
            }
        }
    }
}
exports.ChessBoard = ChessBoard;
//# sourceMappingURL=ChessBoard.js.map