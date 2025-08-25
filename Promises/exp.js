const fs=require("fs").promises
const http=require("http")

const server=http.createServer((req,res)=>{
fs.writeFile("sample.txt","heloo gooyzz","utf8").then((data)=>{
    console.log("data",data)
    res.end(data)
}).catch(err=>{
    console.log("error",err)
})
})