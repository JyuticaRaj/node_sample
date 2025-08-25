
const express=require('express')
const app=express();
//Method types - familiarise
// GET
// POST
// PUT
// DELETE
// PATCH
// Create user management API - create a new project
// getAllUsers - return array of users names

let name=["Ammu","Rahul","Unni"]
app.get("/getAllUsers",function(req,res){
    res.json(name)
})

//insertUser?name=kk inserts user into array, do not allow duplications and empty name
app.post("/insertName",function(req,res){
    let names=req.query.names
     name.push(names)
    res.send("inserted sucess")
})

//deleteUser?name=kk - delete user based on name - make sure if user not present, send error message
app.delete("/deleteName", function(req, res) {
    let names = req.query.names;
    let i = name.indexOf(names);

    if (i === -1) {
        return res.send("name not exist " + names); 
    }
else{
     name.splice(i, 1);
    res.send("Deleted name " + names);
}
    
});


//updateUser?name=kk&newName=TT Update name with new name, name sure old name is present, if not send error
app.put("/changeName", function(req, res) {
    let names = req.query.names;
    let newName = req.query.newName;

    let i = name.indexOf(names);

    if (i === -1) {
        return res.send("name not exist " + names);
    }
else{
    
        name[i] = newName;
    res.send("Updated " + name[i] + " to " + newName);
}
});
app.listen(6000)
