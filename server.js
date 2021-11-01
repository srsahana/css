const express=require('express')
const database=require('./database/db')
const app =express()
const categoryRoutes=require('./database/schema/routes/categoryRoutes')

console.log(categoryRoutes.stack)

app.use(express.json())

app.use('/category', categoryRoutes)

app.get('/',(req,res)=>{
    try {
        console.log(document)
    } catch (error) {
        res.status(203).send(error.message)
    }
})


app.listen(3001,()=>{
    console.log("Listening at port:3001")
})
