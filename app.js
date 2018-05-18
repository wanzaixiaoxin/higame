var express = require("express")
var path = require('path')
var index = require('./routes/index')
//var userlogin = require('./route/userlogin')

var app = express()

//app.use('/userlogin',userlogin)

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


app.use('/',index)

var server = app.listen(8000,function(){
	var host = server.address().address
	var port = server.address().port
	console.log("application address is http://%s:%s",host,port)
})
