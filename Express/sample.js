const express=require('express')
const app=express();
app.use(express.json());

let name=["Ammu","Rahul","Unni"]
app.get("/getAllUsers",function(req,res){
    res.json(name)
})
app.listen(5000)
let names = [];
app.post("/insertUsers",function(req,res){
    let name=req.body.names
     names.push(name)
    res.send("inserted ")
})
app.listen(7100)
//Create PUT API to edit existing name inside array, send previous name and new name as request body