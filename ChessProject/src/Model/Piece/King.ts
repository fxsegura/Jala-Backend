import { BoardInterface } from "../Board/BoardInterface";
import { SpaceInterface } from "../Board/SpaceInterface";
import { Piece } from "./ChessPiece";

export class King extends Piece{
    pieceId:string;
    pieceColor:string;
    alive:boolean;

    constructor(pieceId:string,color:string,alive:boolean){
        super(pieceId,color,alive);
    }
    
    validMovementPattern(board:BoardInterface, startSpace: SpaceInterface, endSpace: SpaceInterface){
        const rowSpacesMoved=Math.abs(startSpace.getRow()-endSpace.getRow());
        const columnSpacesMoved=Math.abs(startSpace.getColumn()-endSpace.getColumn());
        if((rowSpacesMoved===1 && columnSpacesMoved===1)||(rowSpacesMoved===1 && columnSpacesMoved===0)|| (rowSpacesMoved===0 && columnSpacesMoved===1)){
            return true;
        }
        else
            return false;
    }
}