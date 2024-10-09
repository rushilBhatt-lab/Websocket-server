import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 8080; //sending request from http and websocket request on same server


 /* app.listen will return a server response.
  We need this instace to run http and websocket server on same part */
const server = app.listen(port, () => {
    console.log("server is listening...")
});

const wss = new WebSocketServer({ server });


//WS meaning specific connection for client
wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log("data from client:", data); //Data will be logged in form of Buffer. we can use '%s' before the end of characters to convert it to string
        ws.send("thanks buddy!");
})
})

//To connect with client there is web socket browser API available