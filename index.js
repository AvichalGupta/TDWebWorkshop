const express = require("express");
const app = express();

app.use(express.static(__dirname+"/icons"))
app.use(express.static(__dirname+"/illustrations"))
app.use(express.static(__dirname+"/images"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.listen(process.env.PORT||3000,()=>{
    console.log("Server running on port,"+process.env.PORT);
    console.log(__dirname)
})

