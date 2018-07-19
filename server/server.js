const path = require("path");
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection',(socket)=>{
    console.log("New user connected");
    socket.on('disconnect',()=>{
        console.log("User disconnected");
    });
});

const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

app.get('/', (req, res)=>{
    res.send("<h1>Holla senior</h1>");
});

server.listen(3100, ()=>{
    console.log("Server up on port 3100");
});