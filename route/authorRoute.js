const express=require('express')
const router=express.Router()
const Author=require('../models/Author')
const Service=require('../service/GenericService')
const name="Author"

router.get('/',(req,res)=>{
    Service.getAll(res,Author,name).catch((error)=>{
        res.status(500).send(error+"Server Error")
    })
})

router.get('/:id',(req,res)=>{
    Service.getById(req,res,Author,name).catch((error)=>{
        res.status(500).send(error+"Server Error")
    })
})

router.post('/',async(req,res)=>{
    const {name, birth_year}=req.body
    if(!name || !birth_year){
        res.status(400).send("Please provide required fields")
    }else{
        Service.add(res,Author,{name,birth_year}).catch((error)=>{
            res.status(500).send(error+"Server Error")
        })
    }
})

router.delete('/:id',(req,res)=>{
    Service.deleteById(req,res,Author,name).catch((error)=>{
        res.status(500).send(error+"Server Error")
    })
})




module.exports=router