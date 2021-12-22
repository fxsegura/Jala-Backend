import express from "express";
import { ChessBoard } from "./Model/Board/ChessBoard";
import { Player } from "./Model/Player/Player";

const app = express();
const port = 3000;
let board = new ChessBoard()
let player1 = new Player("1","Player1","white",true);
let player2 = new Player("2","Player2","black",false);

app.get('/', (req, res) => {
    res.send('Hello World!!!');
})
app.get('/reset', (req, res) => {
    board.resetBoard();
    res.send("Board has been Reset")
})
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});