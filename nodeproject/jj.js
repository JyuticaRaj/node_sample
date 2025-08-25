const http = require("http"); 
const PORT = 4110;
let users = ["john", "madhav", "anju"];

const server = http.createServer((req, res) => {
    let url = req.url;
    
    if (url.includes("getAllusers")) {
        
        res.end(`list of users = ${users}`);
    } else {
        res.end("Invalid endpoint");
    }
});

server.listen(PORT, function (err) { 
    if (err) {
        console.log(err);
    } else {
        console.log("success");
    }
});
