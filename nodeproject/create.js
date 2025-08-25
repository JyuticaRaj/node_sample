const http = require("http");
const port = 3000;

let users = [
  { name: "bhavana", age: 22 },
  { name: "jyutica", age: 30 }
];

const server = http.createServer(function (req, res) {
  let url = req.url;

  // GET ALL USERS
  if (url.includes("getUser")) {
    res.end(JSON.stringify(users));
  }

  // INSERT USER (insertUser?name=xx&age=yy)
  else if (url.includes("insertUser")) {
    let name = url.split("=")[1].split("&")[0];
    let age = url.split("=")[2];
    users.push({ name: name, age: parseInt(age) });
    res.end("Inserted: " + name);
  }

  // DELETE USER (deleteUser?name=xx)
  else if (url.includes("deleteUser")) {
    let arrys = url.split("=")[1];
    let index = -1;

    for (let i = 0; i < users.length; i++) {
      if (arrys === users[i].name) {
        index = i;
      }
    }

    if (index === -1) {
      res.end("No such user: " + arrys);
    } else {
      users.splice(index, 1);
      res.end("Deleted user: " + arrys);
    }
  }

  // UPDATE USER (updateUser?mark=66&place=hyd&name=bhavana)
  else if (url.includes("updateUser")) {
    let mark = url.split("=")[1].split("&")[0];
    let place = url.split("=")[2].split("&")[0];
    let name = url.split("=")[3];

    let index = getName(name);

    if (index === -1) {
      res.end("User not found: " + name);
    } else {
      users[index].mark = mark;
      users[index].place = place;
      res.end("Updated user: " + name);
    }
  }

  else {
    res.end("Invalid API");
  }
});

// Function to find user index by name
function getName(name) {
  let index = -1;
  for (let i = 0; i < users.length; i++) {
    if (name === users[i].name) {
      index = i;
    }
  }
  return index;
}

server.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running on port " + port);
  }
});
