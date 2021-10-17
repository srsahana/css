const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

let products=[{name:'iPhone12 Case',price:'999'},{name:'iPhone13 Case',price:'1199'},{name:'iPhone13 pro Case',price:'1499'}]

//--------PUBLIC routes--------
//GET ROUTE
//Send all products
app.get('/products',(req,res)=>{
    res.json({products})
})

//--------PRIVATE routes--------

app.post('/products/add',(req,res)=>{
    const {name,price}=req.body
    if(!name || !price) res.json({error: "Validation failed "})
    else{
        products.push({
           name,
           price,
        })
        res.send({products})
    }
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})