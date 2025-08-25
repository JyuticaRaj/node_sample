const express=require('express')
const app=express();
app.use(express.json());
//Each student should have name, age, mark and email
let users=[{"name":"Rahul","age":22, "mark":66," email":"rahul@gmail.com"},
    {"name":"meenu","age":25, "mark":69," email":"meenu@gmail.com"},
    {"name":"Ammu","age":27,"mark":70," email":"ammu@gmail.com"}]

app.get("/getAllUsers",function(req,res){
    res.json(users)
})
//Create API to store students into array (POST, use body, send data as json object)
app.post("/insertUsers",function(req,res){
    let user=req.body
    users.push(user)
    res.json("inserted ")
    //Make sure duplicate email doesn't exist
  
    let data = users.map(users => users.email);
    let i = data.indexOf(user.email);
    if(i!==-1){
        return res.send("email is not exist",users.email)
    }
 else{
   users.push(user)
   res.json("inserted")
 }
})
//Generate ID automatically

app.listen(7000)