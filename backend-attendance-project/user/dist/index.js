"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
/*import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!!!');
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});*/
const server = new server_1.Server();
server.start();
//# sourceMappingURL=index.js.map