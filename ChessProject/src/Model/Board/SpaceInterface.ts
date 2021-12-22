import { Piece } from "../Piece/ChessPiece";
import { ChessPieceInterface } from "../Piece/ChessPieceInterface";

export interface SpaceInterface{
    getPiece():Piece;
    setPiece(piece:Piece):void;
    getRow():number;
    setRow(row:number):void;
    getColumn():number;
    setColumn(column:number):void;
    getEmpty():boolean;
    setEmptyToggle():void;
}