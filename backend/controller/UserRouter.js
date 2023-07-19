const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    console.log('this is console log');
    res.send('respone from router. ')
})




module.exports  = router