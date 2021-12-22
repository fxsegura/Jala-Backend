import { BoardInterface } from "../Board/BoardInterface";
import { SpaceInterface } from "../Board/SpaceInterface";
import { Piece } from "./ChessPiece";

export class Knight extends Piece{
    pieceId:string;
    pieceColor:string;
    alive:boolean;

    constructor(pieceId:string,color:string,alive:boolean){
        super(pieceId,color,alive);
    }
    
    validMovementPattern(board:BoardInterface, startSpace: SpaceInterface, endSpace: SpaceInterface){
        const rowSpacesMoved=Math.abs(startSpace.getRow()-endSpace.getRow());
        const columnSpacesMoved=Math.abs(startSpace.getColumn()-endSpace.getColumn());
        if(rowSpacesMoved * columnSpacesMoved === 2){
            return true;
        }
        else{
            return false;
        }
    }
}