const express=require('express')
const router=express.Router()
const Library=require('../models/Library')
const Service=require('../service/GenericService')
const name="Library";

router.get('/',(req,res)=>{
   Service.getAll(res,Library,name).catch((error)=>{
    res.status(500).send(error+"Server Error")
   })
})


router.get('/:id',(req,res)=>{
    Service.getById(req,res,Library,name).catch((error)=>{
        res.status(500).send(error+"Server Error")
    })
})
// router.get('/',async(req,res)=>{
//     const result=await Library.find()
//     if(result){
//         res.status(200).json(result)
//     }else{
//         res.status(404).send("Library not found")
//     }
// })


router.get('/:id',async(req,res)=>{
    const id=req.params.id
    const result=await Library.findById(id)
    if(result){
        res.status(200).json(result)
    }else{
        res.status(404).send("Library not found")
    }
})

router.post('/',async(req,res)=>{
    const {name,location}=req.body
    if (!name || !location){
        res.status(400).send("Please provide required fields")
    }else{
        // try{
        //     const result=await Library.create({name,location})
        //     res.status(200).json(result)
        // }catch(error){
        //     res.status(500).json(error)
        // }
        Service.add(res,Library,{name,location}).catch((error)=>{
            res.status(500).send(error+"Server Error")
        })
    }

})

router.delete('/:id',(req,res)=>{
    Service.deleteById(req,res,Library,name).catch((error)=>{
        res.status(500).send(error+"Server Error")
    })
})



router.put('/:id',async(req,res)=>{
    const id=req.params.id
    const library=await Library.findById(id).catch((error)=>{
        console.error(error)
    })
     
    if(!library){
        res.status(404).send("Library not found")
    }else{
        const {name,location}=req.body
        if(!name || !location){
            res.status(400).send("Please provide required fields")
        }else{
            try{
                const result=await library.updateOne({name,location})
                res.status(200).json(result)
            }catch(error){
                res.status(500).json(error)
            }
        }
    }




})




module.exports=router