import { WebSocketServer } from "ws";
import { client } from "@repo/db/client"; 

const wss = new WebSocketServer({port: 8081});

wss.on('connection', (ws, req) => {

    ws.on('open', ()=> {
        ws.send("connection opened");
    });
});