const database= require('C:/Users/Sahana Soorly Ramesh/Desktop/ShapeAI 1/CSS/database/db')
const express=require('express')
const router =express.Router()
const {v4:uuidv4}= require('uuid')

/* 
ROUTE: http://localhost:3001/category/all
METHOD: GET
*/

router.get('/all',(req,res)=>{
    try {
        res.json({
            categories: database.categories,
            message:"Successfully fetched categories",
            status:"SUCCESS"
        })
    } catch (error) {
        res.json({
            categories:[],
            message:error.message,
            status:"FAILED"
        })
    }
})

/* 
ROUTE: http://localhost:3001/category/add
METHOD: POST
*/

router.post('/add',(req,res)=>{
    const {name}=req.body
    const newCategory ={
        id:uuidv4(),
        name

    }

    try {
        
        let includes=database.categories.find(item=>item.name === name)
        if(!includes) database.categories.push(newCategory)
        else console.log("Already exists")

        res.json({
            categories:database.categories,
            message:"Successfully added categories",
            status:"SUCCESS"
        })
    } catch (error) {
        res.json({
            categories:[],
            message:error.message,
            status:"FAILED"
        })
    }
})

/* 
ROUTE: http://localhost:3001/category/delete
METHOD: DELETE
*/

router.delete('/delete/:id',(req,res)=>{
    try {
        const {id}=req.params
        const newCategories=database.categories.filter(item =>item.id!==id)

        database.categories=newCategories
        res.json({
            categories:newCategories,
            message:"Successfully removed categories",
            status:"SUCCESS"
        })
    } catch (error) {
        res.json({
            categories:[],
            message:error.message,
            status:"FAILED"
        })
    }
})


/* 
ROUTE: http://localhost:3001/category/update/:id
METHOD: PUT
*/

// router.put('/update',(req,res)=>{
//     try {
//         const {id}=req.body
//         const updateCategory=database.categories.filter(item =>item.id!==id)

//         database.categories=updateCategory
//         res.json({
//             categories:updateCategories,
//             message:"Successfully update categories",
//             status:"SUCCESS"
//         })
//     } catch (error) {
//         res.json({
//             categories:[],
//             message:error.message,
//             status:"FAILED"
//         })
//     }
// })

module.exports=router