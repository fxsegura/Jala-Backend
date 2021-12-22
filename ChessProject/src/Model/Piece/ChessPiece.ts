import { BoardInterface } from "../Board/BoardInterface";
import { SpaceInterface } from "../Board/SpaceInterface";
import { ChessPieceInterface } from "./ChessPieceInterface";
export abstract class Piece implements ChessPieceInterface{
    abstract pieceId:string;
    abstract pieceColor: string;
    abstract alive: boolean;
    
    constructor(pieceId:string,pieceColor:string,alive:boolean) {
        this.setID(pieceId);
        this.setColor(pieceColor);
        this.setAlive(alive);
    }
    getID(){
        return this.pieceId;
    }
    setID(pieceID:string){
        this.pieceId=pieceID;
    }
    getColor(){
        return this.pieceColor;
    }
    setColor(color:string){
        this.pieceColor=color;
    }
    getAlive(){
        return this.alive;
    }
    setAlive(alive:boolean){
        this.alive=alive;
    }
    validEndSpace(board:BoardInterface, endSpace: SpaceInterface){
        if(endSpace.getEmpty()===true){
            return true;
        }
        if (this.getColor()===endSpace.getPiece().getColor()){
            return false;
        }else{
            return true;
        }
    }
    move(board:BoardInterface, startSpace: SpaceInterface, endSpace: SpaceInterface){
        if(this.validEndSpace(board,endSpace)===true && this.validMovementPattern(board,startSpace,endSpace)===true){
            board.getSpaceData(startSpace.getRow(),startSpace.getColumn()).setPiece(null);
            board.getSpaceData(endSpace.getRow(),endSpace.getColumn()).setPiece(this);
        }
    }
    abstract validMovementPattern(board:BoardInterface, startSpace: SpaceInterface, endSpace: SpaceInterface):boolean;
}