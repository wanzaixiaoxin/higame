var express = require('express')
var router = express.Router()

/*Home page*/
router.get('/',function(req,res){
    res.render('index',{title:'express'})
})

module.exports = router


