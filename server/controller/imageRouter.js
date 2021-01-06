const express = require('express')
const router = express.Router();
const Image = require('../model/image')


router.post('/',(req,res)=>{
    const img = new Image({
        url:req.body.url,
        profile:req.body.profile,
        username:req.body.username,
        category:req.body.category
    })
    img.save()
    .then(brindha=>{
        res.json(brindha)
    })
})

router.get('/alldata',(req,res)=>{
    Image.find()
    .then(data=>{
        res.json(data)
    })
})




module.exports = router





