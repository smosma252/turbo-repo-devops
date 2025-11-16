

import express from 'express';
import { Router } from 'express';
import { client } from "@repo/db/client"; 

const app = express();
const PORT = 8080;

app.use(express.json());


app.get("/", (req, res)=> {
    res.json({
        message: "You have connected to backend /"
    });
});


app.post("/signup", (req, res) => {
    const user = req.body;

    client.user.create()
});


app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})