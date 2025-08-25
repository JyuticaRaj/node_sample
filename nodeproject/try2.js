const http = require("http");
const Port = 3000;
let users = [
  {
    name: "Bhavana",
    age: "22",
    mark: 95,
  },
  {
    name: "john",
    age: "23",
    mark: 87,
  },
  {
    name: "Arun",
    age: "25",
    mark: 88,
  },
];

const server = http.createServer(function (req, res) {
  const url = req.url; 
  if (url.includes("getUser")) {
    res.end(JSON.stringify(users));


  } else if (url.includes("insertUser")) {// /insertuser?name = Athira&age  = 21&mark  =  25
    let name = url.split("=")[1].split("&")[0];
    let age = parseInt(url.split("=")[2].split("&")[0]);
    let mark = parseInt(url.split("=")[3]);


    if (name.length >= 3) {
      let sample = {
        name: name,
        age: age,
        mark: mark,
      };

      users.push(sample);
      res.end("Inserted");
    } else {
      res.end("Cannot be inserted.name must be greater than 3 letters");
    }

  } else if (url.includes("deleteUser")) {
    let nameToDelete = url.split("=")[1];
    let index=users.map(users=>users.name).indexOf(nameToDelete)
    if(index==-1){
        res.end("name does not exists")
    }else{
        users.splice(index,1)
        res.end("deleted" + nameToDelete)
    }

    } else if (url.includes("editUser")) {
      let oldname = url.split("=")[4]; // /editUser?name = kk&age = 7&mark  = 89&oldname =  Athulya
      let age = url.split("=")[2].split("&")[0];
      let mark = url.split("=")[3].split("&")[0];
      let name = url.split("=")[1].split("&")[0];
      let index = -1;
      for (let i = 0; i < users.length; i++) {
        if (oldname == users[i].name) {
          index = i;
        }
    }
    if (index == -1) {
      res.end("no such user exists");
    } else {
      users[index].age = age;
      users[index].mark = mark;
      users[index].name = name;
      res.end("user details updated");
    }
  } else if(url.includes("getTotalUsers")){
     let totalUsers=users.length;
     res.end(`totalusers is ${totalUsers}`)

   } else if(url.includes("getFirstUser")){
      let firstuser=users[0]
      res.end(JSON.stringify(firstuser))


   } else if(url.includes("getLastUser")){
      let lastUser=users.length-1;
      res.end(JSON.stringify(users[lastUser]))

   } else if(url.includes("getBestStudent")){
      let maximumMark=users[0].mark
      let bestStudent=users[0]
      for(let i=0;i<users.length;i++){
        if(maximumMark<users[i].mark){
          maximumMark=users[i].mark
            bestStudent=users[i]
        }
    }
      res.end(`Best student : ${JSON.stringify(bestStudent)}`)
   } else {
     res.end("No such API");
   }
});

server.listen(Port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});