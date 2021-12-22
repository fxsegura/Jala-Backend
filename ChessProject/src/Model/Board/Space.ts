import { Piece } from "../Piece/ChessPiece";
import { ChessPieceInterface } from "../Piece/ChessPieceInterface";
import { SpaceInterface } from "./SpaceInterface";

export class Space implements SpaceInterface {
    private piece: Piece;
    private row: number;
    private column: number;
    private empty:boolean;

    constructor(row: number, column: number, piece: Piece) {
        this.row=row;
        this.column=column;
        this.piece=piece;
    }
    getPiece(): Piece {
        return this.piece;
    }

    setPiece(piece: Piece) {
        this.piece = piece;
    }

    getRow(): number {
        return this.row;
    }

    setRow(row: number) {
        this.row = row;
    }

    getColumn(): number {
        return this.column;
    }

    setColumn(column: number) {
        this.column = column;
    }
    getEmpty(){
        return this.empty;
    }
    setEmptyToggle(){
        this.empty=!this.empty;
    }
}