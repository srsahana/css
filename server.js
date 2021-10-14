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

const data=[{ name:"Abc"},{ name:"Ggg"},{ name:"Jjj"}]

const express = require('express')
const app = express()

app.get('/getNames',(req,res)=>{
    res.send(data)
})



app.listen(3000,()=>{
    console.log("server lisening at port 3000")
})