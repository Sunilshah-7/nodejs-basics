var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();
var server = http.createServer(app);

app.get('/',function(req,res){
    res.send('<h1>Express works</h1>');
});

app.get('/tasks',function(req,res){
    fs.readFile('./db.json', function(err,data){
        var tasks = JSON.parse(data.toString()).tasks;
        res.send(tasks);
    });
});

server.listen(3000,function(){
    console.log('Server is working at port 3000');
});