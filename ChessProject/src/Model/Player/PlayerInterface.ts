export interface PlayerInterface{
    getColor():string;
    setColor(color:string):void;
    getTurn():boolean;
    setTurn(active:boolean):void;
}