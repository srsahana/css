const express=require('express')
const app =express()

app.get('/products/:categories',(req,res)=>{
    console.log(req.params)
    res.send("gggg")
})

app.listen(3001,()=>{
    console.log("Listening at port:3001")
})