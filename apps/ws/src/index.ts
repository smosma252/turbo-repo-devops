import { WebSocketServer } from "ws";
import { client } from "@repo/db/client"; 

const wss = new WebSocketServer({port: 8081});

wss.on('connection', async (ws, req) => {
    ws.send("Connection established");
    await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    ws.on('open', ()=> {
        ws.send("connection opened");
    });
});