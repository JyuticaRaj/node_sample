const http = require('http');       
const port = 4008;                  
const names = [];                   

const server = http.createServer(function (req, res) {
    const strUrl = req.url; 

    if (strUrl.includes('insert')) {
        let name = strUrl.split("=")[1]; 
        if (names.includes(name)) {      
            res.end("name already exist");
        } else {
            names.push(name);           
            res.end("Inserted " + name);
        }
    }
    else if (strUrl.includes('getAllNames')) {
        res.end(names.toString());
    }
    else if (strUrl.includes('deleteName')) {
        let name = strUrl.split("=")[1]; 
        let index = names.indexOf(name); 
        if (index === -1) {               
            res.end("name doesn't exist " + name);
        } else {
            names.splice(index, 1);      
            res.end("Deleted " + name);
        }
    }
}); 

server.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("success");
    }
});
