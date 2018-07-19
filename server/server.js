const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

app.get('/', (req, res)=>{
    res.send("<h1>Holla senior</h1>");
});

app.listen(3100, ()=>{
    console.log("Server up on port 3100");
});