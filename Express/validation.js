const express=require('express')
const app=express();
app.use(express.json());

let student=[]
    //  {"name":"Rahul","age":22, "mark":66," email":"rahul@gmail.com"},
    //  {"name":"Ammu","age":27,"mark":70," email":"ammu@gmail.com"}]
    
    app.get("/getAllUsers",function(req,res){
    res.json(student)
    })
    //function to  generate automic id
   function getNextId(){
    let lastId=0
    if(lastId!==0){
        lastId=student[student.length-1].id
    }
    lastId=lastId+1
    return lastId
}


function emailDuplicate(email) {
    for (let i = 0; i < student.length; i++) {
        if (student[i].email === email) {
            return true;
        }
    }
    return false;
}
function validateEmail(email){
   var re = /^\S+@\S+\.\S+$/;
   return re.test(email);
}


   app.post("/insertUsers", function (req, res) {
    let data = req.body;

    if (data.hasOwnProperty("name")) {
        if (data.hasOwnProperty("age")) {
            if (data.hasOwnProperty("mark")) {
                if (data.hasOwnProperty("email")) {
                    if (emailDuplicate(data.email)) {
                        res.send("Email already exists: " + data.email);
                    } else {
                        if (data.name.length >= 3) {
                            if (Number.isFinite(data.age)) {
                                if (Number.isFinite(data.mark)) {
                                    if (data.age >= 17 && data.age <= 30) {
                                        if ((data.mark >= 0 && data.mark <= 100)) {
                                            if (validateEmail(data.email)) {
                                            
                                                let user={
                                                    name:data.name,
                                                    age:data.age,
                                                    mark:data.mark,
                                                    email:data.email,
                                                    id:getNextId()
                                                }
                                                student.push(user);
                                                res.json("Inserted successfully: " + data.name);
                                            } else {
                                                res.send("Please enter proper email id");
                                            }
                                        } else {
                                            res.send("Mark must be within 0 to 100");
                                        }
                                    } else {
                                        res.send("Age must be within 17 to 30");
                                    }
                                } else {
                                    res.send("Mark must be a number");
                                }
                            } else {
                                res.send("Age must be a number");
                            }
                        } else {
                            res.send("Name must be at least 3 letters");
                        }
                    }
                } else {
                    res.send("Email is mandatory");
                }
            } else {
                res.send("Mark is mandatory");
            }
        } else {
            res.send("Age is mandatory");
        }
    } else {
        res.send("Name is mandatory");
    }
})
//API to return list of users starting with any letter sent from UI - (query params)
// ex - if A is send, retrieve all users name starting with A

app.get("/getUserByLetter", function (req, res) {
    let letter = req.query.letter;

    if (!letter || letter.length !== 1) {
        return res.send("Please provide a single letter as query param (ex: ?letter=A)");
    }

    let result = [];
    for (let user of student) {
        user.name.toLowerCase().startsWith(letter.toLowerCase()) && result.push(user.name);
    }

    res.json(result);
});app.listen(9000) 






