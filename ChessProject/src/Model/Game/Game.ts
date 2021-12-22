import { BoardInterface } from "../Board/BoardInterface";
import { ChessBoard } from "../Board/ChessBoard";
import { PlayerInterface } from "../Player/PlayerInterface";

export class Game{
    private status:string;
    private board:ChessBoard;
    private turn:number;
    private player1:PlayerInterface;
    private player2:PlayerInterface;

    constructor(board:ChessBoard,player1:PlayerInterface,player2:PlayerInterface){
        this.status="Ready to Play";
        this.board=board;
        this.player1=this.player1;
        this.player2=this.player2;
        this.turn=0;
    }
    increaseTurnCount(){
        this.turn=this.turn+1;
    }

}
