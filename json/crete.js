const http = require('http');       
const port = 3008; 

let users = [
    { name: "bhavana", age: 22 },
    { name: "jyutica", age: 30 }
];

const server = http.createServer(function(req, res) {
    const strUrl = req.url;

    if (strUrl.includes("getUsers")) {
        res.end(JSON.stringify(users));
    } 
    else if (strUrl.includes("insert")) {
        //insert?name=Fathima&age=28
        let params = strUrl.split("?")[1]; // name=Fathima&age=28
        let name = params.split("&")[0].split("=")[1]; // Fathima
        let age = params.split("&")[1].split("=")[1];  // 28

        users.push({ name, age: parseInt(age) });
        res.end(`Inserted user: ${name}, Age: ${parseInt(age)}`);
    }
   else if (strUrl.includes("deleteUser")) {
    // Example: /deleteUser?name=jyutica&age=30
    let params = strUrl.split("?")[1]; // name=jyutica&age=30
    let name = params.split("&")[0].split("=")[1]; // jyutica
    let age  = params.split("&")[1].split("=")[1]; // 30

    console.log("Name:", name);
    console.log("Age:", age);
    res.end(`Deleted user: ${name}, Age: ${age}`);
    }
});
 
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
