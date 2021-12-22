import { SpaceInterface } from "./SpaceInterface";

export interface BoardInterface{
    getSpaceData(row:number,column:number):SpaceInterface;
    resetBoard():void;
}