const database= require('C:/Users/Sahana Soorly Ramesh/Desktop/ShapeAI 1/CSS/database/db')
const express=require('express')
const router =express.Router()
const {v4:uuidv4}= require('uuid')

/* 
ROUTE: http://localhost:3001/products/all
METHOD: GET
*/

router.get('/all',(req,res)=>{
    try {
        res.json({
            products:database.products,
            message:"Successfully fetched products",
            status:"SUCCESS"
        })
    } catch (error) {
        res.json({
            products:[],
            message:error.message,
            status:"FAILED"
        })
    }
})

/* 
ROUTE: http://localhost:3001/products/add
METHOD: POST
*/

router.post('/add',(req,res)=>{
    
    const {name,price,category}=req.body

    if(!database.categories.find(item =>item.name===category)){
        //create a category if it doesn't already exist
        let newCategory={name:category, id:uuidv4}
        database.categories.push(newCategory)
        //create a product and add it

        const newProduct={
            id:uuidv4(),
            name,price,category:category
        }
        database.products.push(newProduct)
    }else{
        const newProduct={
            id:uuidv4(),
            name,price,category:category
        }
        database.products.push(newProduct)
    }
    try {
        res.status(200).json({
            products:database.products,
            message:"Successfully fetched products",
            status:"SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            products:[],
            message:error.message,
            status:"FAILED"
        })
    }
})


module.exports=router