const express = require('express')
const mongoose = require("mongoose")
const morgan = require('morgan')
const cors = require('cors')
const app=express();

//midleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());


//router
app.use(require('./controller/imageRouter'))








app.listen(5000,()=>{
    console.log('server connected')
})

mongoose.connect('mongodb://localhost:27017/spalshdb', { useNewUrlParser: true, useUnifiedTopology:true }, (err)=>{
    if(!err){
        console.log('database connected')
    }else{
        console.log(err)
    }
})






