const database=require('../database/db')
const express=require('express')
const router =express.Router()

router.get('/all',(req,res)=>{
    try {
        res.status(200).json({
            categories:database.categories,
            message:"Successfully fetched categories",
            status:"SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            categories:[],
            message:error.message,
            status:"FAILED"
        })
    }
})