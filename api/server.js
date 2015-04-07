var express = require('express'),
	bodyParser = require('body-parser'),
	restful = require('node-restful'),
	mongoose = restful.mongoose;


var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/linguagens');

var LinguagemSchema = mongoose.Schema({
	nome: String,
	felicidade: Number
});

var Linguagens = restful.model('linguagens', LinguagemSchema);
Linguagens.methods(['get', 'post', 'put', 'delete']);
Linguagens.register(app, '/api/linguagens');


app.listen(3000);
console.log('Server running at port 3000');