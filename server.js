const express=require('express')
// const database=require('./database/db')
const app =express()
const categoryRoutes=require('./database/schema/routes/categoryRoutes')
const productsRoutes=require('./database/schema/routes/productRoutes')


app.use(express.json())

app.use('/category', categoryRoutes)
app.use('/products', productsRoutes)




app.listen(3001,()=>{
    console.log("Listening at port:3001")
})
