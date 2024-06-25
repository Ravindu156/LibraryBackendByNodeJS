const mongoose=require('mongoose')
const Schema=mongoose.Schema

const bookSchema=new Schema({
    title:{type:String,required:true},
    library_id:{type:mongoose.Types.ObjectId,required:true},
    author_ids:{type:Array,required:true}
})

const Book=mongoose.model('books',bookSchema)

module.exports=Book







