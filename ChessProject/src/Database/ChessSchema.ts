import { Schema } from "mongoose";

export const ChessSchema = new Schema<any>({
    chessBoard: { type: Object }
})