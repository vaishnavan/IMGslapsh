const  mongoose = require ('mongoose')


const  imageschema = new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('Image',imageschema)