var express = require('express'),
    bodyParser = require('body-parser'),
    mongodb = require('mongodb');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = 8080
app.listen(port);

console.log('Servidor HTTP está escutando na porta ' + port);

app.get('/', function(req,res){
    res.send({msg:'Olá'});
});