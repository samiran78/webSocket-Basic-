const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');

app.use(express.static(path.resolve("./public")));
app.get("/", (req,res)=>{
    return res.sendFile("/public/index.html");
})

io.on('connection', (socket) => {
    socket.on("user-message", (message)=>{
        // console.log("A new USER message",message);
        io.emit("message++", message);
    })
  });


server.listen(3000,()=>{
    console.log("hii");
})

