import { PlayerInterface } from "./PlayerInterface";

export class Player implements PlayerInterface{
    private playerID:string;
    private playerName:string;
    private color:string;
    private activeTurn:boolean;
    
    constructor(playerID:string,playerName:string,color:string,activeTurn:boolean){
        this.playerID=playerID;
        this.playerName=playerName;
        this.color=color;
        this.activeTurn=activeTurn;
    }
    getID(){
        return this.playerID;
    }
    setID(playerID:string){
        this.playerID=playerID;
    }
    getName(){
        return this.playerName;
    }
    setName(playerName:string){
        this.playerName=playerName;
    }
    getColor(){
        return this.color;
    }
    setColor(color:string){
        this.color=color;
    }
    getTurn(){
        return this.activeTurn;
    }
    setTurn(active:boolean){
        this.activeTurn=active;
    }
    
}