import { BoardInterface } from "../Board/BoardInterface";
import { SpaceInterface } from "../Board/SpaceInterface";
import { Piece } from "./ChessPiece";

export class Pawn extends Piece{
    pieceId:string;
    pieceColor:string;
    alive:boolean;
    private firstMove:boolean;

    constructor(pieceId:string,color:string,alive:boolean,firstMove:boolean){
        super(pieceId,color,alive);
        this.firstMove=firstMove;
    }
    getFirstMove(){
        return this.firstMove;
    }
    toggleFirstMove(){
        this.firstMove=!this.firstMove;
    }

    validMovementPattern(board:BoardInterface, startSpace: SpaceInterface, endSpace: SpaceInterface){
        const rowSpacesMoved=Math.abs(startSpace.getRow()-endSpace.getRow());
        const columnSpacesMoved=Math.abs(startSpace.getColumn()-endSpace.getColumn());
        
        if(endSpace.getPiece()===null)
        {
            if(rowSpacesMoved!==0){
                return false;
            }
            if(this.getFirstMove()===false){
                if(rowSpacesMoved>1||columnSpacesMoved!==0)
                    return false;
            }
            else{
                if(rowSpacesMoved>2||columnSpacesMoved!==0)
                    return false;
            }
        }
        else{
            if(columnSpacesMoved===rowSpacesMoved)
                return true;
            else{
                    return false;
            }
        }
        return true;
    }
}