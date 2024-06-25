const express=require('express')
const app=new express()
const port=8080
const mongoose=require('mongoose')
const libRoute=require('./route/libraryRoute.js')
const authorRoute=require('./route/authorRoute.js')
const bookRoute=require('./route/bookRoute.js')


app.use(express.json())
app.use('/lib',libRoute)
app.use('/author',authorRoute)
app.use('/book',bookRoute)


mongoose.connect('mongodb+srv://admin:idm.Ravindu156@myapi.1jxywrm.mongodb.net/libraryDb').then(()=>{
    console.log('connected to database');
}).catch((error)=>{
    console.error(error)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

