

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


app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await client.user.create({
        data : {
            username: username,
            password: password
        }
    })

    res.json({
        message: "User Created!",
        id: user.id
    });
    return
});


app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})