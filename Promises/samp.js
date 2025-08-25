
const fs = require('fs').promises;
const http=require("http")

const server=http.createServer((req,res)=>{
fs.createfile("samle.txt","good night","utf8").then((data)=>{
    console.log("data",data)
    res.end(data)
}).catch(err=>{
    console.log("error",err)
})
})