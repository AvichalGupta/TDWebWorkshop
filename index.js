const express = require("express");
const app = express();

app.use(express.static("icons"))
app.use(express.static("illustrations"))
app.use(express.static("images"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.listen(process.env.PORT||3000,()=>{
    console.log("Server running on port,"+process.env.PORT);
})

