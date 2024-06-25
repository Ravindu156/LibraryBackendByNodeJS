const express=require('express')
const router=express.Router()
const Book=require('../models/Book')
const Service=require('../service/GenericService')
const name="Book";

router.get('/',(req,res)=>{
   Service.getAll(res,Book,name).catch((error)=>{
    res.status(500).send(error+"Server Error")
   })
})

router.get('/:id',(req,res)=>{
    Service.getById(req,res,Book,name).catch((error)=>{
        res.status(500).send(error+"Server Error")
    })
})


module.exports=router