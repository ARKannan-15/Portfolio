const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res) =>{
   res.send("hi");
})

app.listen(3001,function(){
    console.log("Server running in 3001");
})