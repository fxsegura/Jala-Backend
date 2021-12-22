import { BoardInterface } from "../Board/BoardInterface";
import { Space } from "../Board/Space";
import { SpaceInterface } from "../Board/SpaceInterface";

export interface ChessPieceInterface {
    getID():string;
    setID(pieceID:string):void;
    getColor():string;
    setColor(color:string):void;
    getAlive():boolean;
    setAlive(alive:boolean):void;
    validEndSpace(board:BoardInterface, endSpace: SpaceInterface):boolean;
    move(board:BoardInterface, startSpace: SpaceInterface, endSpace: SpaceInterface):void;
    validMovementPattern(board:BoardInterface, startSpace: SpaceInterface, endSpace: SpaceInterface):boolean;
}