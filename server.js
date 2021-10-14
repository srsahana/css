// const http = require('http')
// const fs =require('fs')
// const path =require('path')

// const server = http.createServer((request,response)=>{
//     //request.url
//     const {url}=request
//     if (url=='/login'){
//         response.write(`<h1>LOGIN</h1>`)
//         response.end()
//     }
//     if (url=='/signup'){
//         response.write(`<h1>SIGNUP</h1>`)
//         response.end()
//     }
// })

// console.log(server)
// server.listen(3000,()=>{
//     console.log(`Server lisening at PORT: ${3000}`)
// })


const express = require('express')
const app = express()

app.get('/login',(req,res)=>{
    res.send('This is LOGIN')
})
app.get('/signup',(req,res)=>{
    res.send('This is SIGNUP')
})


app.listen(3000,()=>{
    console.log("server lisening at port 3000")
})