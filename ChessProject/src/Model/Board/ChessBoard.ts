import { Bishop } from "../Piece/Bishop";
import { King } from "../Piece/King";
import { Knight } from "../Piece/Knight";
import { Pawn } from "../Piece/Pawn";
import { Queen } from "../Piece/Queen";
import { Rook } from "../Piece/Rook";
import { BoardInterface } from "./BoardInterface";
import { Space } from "./Space";
import { SpaceInterface } from "./SpaceInterface";

export class ChessBoard implements BoardInterface{
    spaces:SpaceInterface[][];
    constructor(){
        this.resetBoard();
    }
    getDataForAllSpaces(){
        for (let i = 0; i <= 7; i++) {
            for (let j = 0; j <= 7; j++) {
                console.log(this.spaces[i][j]);
            }
        }
    }
    getSpaceData(row:number,column:number){
        return this.spaces[row][column];
    }
    resetBoard(){
        //Set White Pieces
        this.spaces[0][0] = new Space(0, 0, new Rook("WLRook","white",true));
        this.spaces[0][1] = new Space(0, 1, new Knight("WLKnight","white",true));
        this.spaces[0][2] = new Space(0, 2, new Bishop("WLBishop","white",true));
        this.spaces[0][3] = new Space(0, 3, new King("WKing","white",true));
        this.spaces[0][4] = new Space(0, 4, new Queen("WQueen","white",true));
        this.spaces[0][5] = new Space(0, 5, new Bishop("WRBishop","white",true));
        this.spaces[0][6] = new Space(0, 6, new Knight("WRKnight","white",true));
        this.spaces[0][7] = new Space(0, 7, new Rook("WRRook","white",true));
        for (let i = 0; i <= 7; i++) {
        this.spaces[1][i] = new Space(1, i, new Pawn("WPawn"+i.toString(),"white",true,true));
        }

        //Set Black Pieces
        this.spaces[7][0] = new Space(7, 0, new Rook("BLRook","white",true));
        this.spaces[7][1] = new Space(7, 1, new Knight("BLKnight","white",true));
        this.spaces[7][2] = new Space(7, 2, new Bishop("BLBishop","white",true));
        this.spaces[7][3] = new Space(7, 3, new King("BKing","white",true));
        this.spaces[7][4] = new Space(7, 4, new Queen("BQueen","white",true));
        this.spaces[7][5] = new Space(7, 5, new Bishop("BRBishop","white",true));
        this.spaces[7][6] = new Space(7, 6, new Knight("BRKnight","white",true));
        this.spaces[7][7] = new Space(7, 7, new Rook("BRRook","white",true));
        for (let i = 0; i <= 7; i++) {
        this.spaces[6][i] = new Space(6, i, new Pawn("BPawn"+i.toString(),"white",true,true));
        }

        //Blank Spaces
        for (let i = 2; i < 6; i++) {
            for (let j = 0; j < 8; j++) {
                this.spaces[i][j] = new Space(i, j, null);
            }
        } 
    }
}