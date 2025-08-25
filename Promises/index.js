
// Try all the fs functionalities using fsPromise
// Append, read, write, delete, rename, create
// console.log("Stared")
const fs=require('fs').promises
const http = require('http');       
const port = 4008;                  
 
// fs.readFile("abc.txt",function(error,data){
//     if(error){
//         console.log("error",error)
//     }
//     else{
//         console.log("data",data.toString())
//     }
// })

const server = http.createServer(function (req, res) {
    const strUrl = req.url;

    if (strUrl.includes('readFile')) {
        ///readFile?filename=abc.txt
        let fileName=strUrl.split("=")[1]
        fs.readFile(fileName,"utf8").then(data => {
                console.log("data", data);
                res.end(data);
            })
            .catch(error => {
                res.end("Error reading file",);
            })
            .finally(() => {
                console.log("Read file request handled");
            });

        // }else if (strUrl.includes('writeFile')) {
        /// Example: /writeFile
        fs.writeFile("samp.txt", "Hello Guyzzz", "utf8").then(() => {
                res.end("File written successfully");
            })
            .catch(error => {
                res.end("Error writing file: " + error.message);
            })
            .finally(() => {
                console.log("Write file request handled");
            });

    } else {
        res.end("Invalid request");
    }
});

server.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("success");
    }
});

