const mongoose=require("mongoose")
const Library = require("../models/Library")

async function getAll(res,Model,name){
    const result=await Model.find()

    if(result){
        res.status(200).json(result)
    }else{
        res.status(404).send(name+"not found")
    }

}

async function getById(req,res,Model,name){
    const id=req.params.id
    if(!mongoose.Types.ObjectId.isValid){
        return res.status(400).send("Invalid ID")
    }
    const result=await Model.findById(id)
    if(result){
        res.status(200).json(result)
    }else{
        res.status(404).send(name+" with id "+id+" not found")
    }

}

async function add(res,Model,data){
    try {
        const result=await Model.create(data)
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports={getAll,getById,add}







