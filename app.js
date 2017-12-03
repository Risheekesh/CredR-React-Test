var express =require('express');
var app=express();
var nunjucks=require('nunjucks');
var path = require('path');

nunjucks.configure( '.', {
    express: app,
    noCache:true
} );


app.use('/static', express.static(path.join(__dirname, '/public')));

app.get('/*',function(req,res) {
	res.render('./public/views/index.html')
})

console.log("start app")

app.listen((process.env.PORT || 5000));
