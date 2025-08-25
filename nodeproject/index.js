// function sumOfTwo(a,b){
//     return a+b
// }
// console.log (sumOfTwo(10,20))

// const http=require('http');
// const { url } = require('inspector');
 const PORT=3000;

// const server=http.createServer(function(req,res){
//     res.end("Bye")
// });


// server.listen(PORT,function(err){
//     if(err){
//         console.log("error",err)
//     }
//     else{
//         console.log("server started success")
//     }

// });
``

// server.listen(PORT, 'localhost', () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });

// const server=http.createServer(function(req,res){
//     res.end("hello")



// })
// npm i -g packagename
//Read a file and based on its content read another file
 const fs=require("fs")
let locationFileName="locator.txt"
let encoding="utf8"
fs.readFile(locationFileName,encoding,function(error,fileContent){
    if(error){
       console.log("not find the file")
   }
   else{
       console.log("sucessful",fileContent)
        fs.readFile(fileContent,encoding,function(error2,maincontent){
           if(error2){
                console.log("not find the file")
            }
            else{
                console.log("sucessfull",maincontent)
            }
        })
     }
 })
 //Create and write a file into a new folder