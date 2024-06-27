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

router.post('/',(req,res)=>{
    const {title,library_id,author_ids}=req.body
    if(!title || !library_id || !author_ids){
        res.status(400).send("Please provide required fields")
    }else{
        Service.add(res,Book,{title,library_id,author_ids}).catch((error)=>{
            res.status(500).send(error+"Server Error")
        })
    }

})

router.delete('/:id',(req,res)=>{
    Service.deleteById(req,res,Book,name).catch((error)=>{
        res.status(500).send(error+"Server Error")
    })
})







module.exports=router