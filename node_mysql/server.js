var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var PeopleRoutes = require('./routes/people');
const mysqlConnection = require('./connection');

app.use(bodyparser.json());
app.use('/people', PeopleRoutes);


app.listen(3000);
