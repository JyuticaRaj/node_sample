// console.log("started")
const express=require('express')
const app=express();

app.get("/hello",function(req,res){
    res.send("hello world")
})
app.listen(3000)
//API to find square of a number
app.get("/sqr",function(req,res){
    let num=parseInt(req.query.num)
    let square=num*num
    res.send("square is"+square)

})
app.listen(3018)
//API to find sum of 2 numbers
app.get("/sum",function(req,res){
    let num1=parseInt(req.query.num1)
    let num2=parseInt(req.query.num2)
    let sum=num1+num2
    res.end("The sum of numbers"+sum)
})
app.listen(3008)
//Program to concatenate all user names and return as response (a = helo, b= world, => welcome hello world )
app.get("/concact",function(req,res){
    let num1=(req.query.num1)
    let num2=(req.query.num2)
    res.end("The concat of numbers"+num1.concat(num2))
})
app.listen(3108)