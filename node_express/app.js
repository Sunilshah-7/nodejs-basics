var express = require('express');
var app = express();
var bodyparser = require('body-parser');
//parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended:false}));
//parse application/json
app.use(bodyparser.json())

//People = /people
//person/row = /people/person
//person/row/age = /people/person/age

let people = {person:[{name : "prabin"}]};

app.get('/people', (req,res)=>{
    res.json(people);
    res.end();
});

app.post('/people',(req,res)=>{
    if(req.body.name){
        people.person.push({name : req.body.name});
    }
    res.send(people);
    res.end();
});

app.get('/people/:name',function(req,res){
    res.send({name: req.params.name});
});

var port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log("Listening to port 3000");
});