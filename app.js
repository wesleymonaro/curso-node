var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();

//app.set('abc', 123); //SETANDO VARIÁVEIS

app.use('/static', express.static('public')); // http://localhost:3000/static/index.html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', './views');
app.set('view engine', 'jade');

//app.use(express.static('public')) // http://localhost:3000/index.html

app.route('/')
    .get((req, res) => {
        listarCursos(res)
    })
    .post((req, res) => {
        var curso = { nome: req.body.nome, categoria: req.body.categoria };

        inserirCurso(curso, () => {
            listarCursos(res)
        })
    })

app.get('/', (req, res) => {
    res.render('index', { nome: 'Wesley' })
})


// app.get(/((sh)|(x))amp(o{2}|u)/, (req, res) => { //usando regex para permitir variações
//     res.send('Hello World ' + req.params.id)
// })

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
})


function listarCursos(resp) {
    MongoClient.connect('mongodb://localhost:27017', (err, db) => {
        const treinaWebDB = db.db('treinaweb')
        treinaWebDB.collection('cursos').find().sort({ nome: 1 }).toArray((err, result) => {
            resp.render('index', { data: result });
        })
    })
}

function inserirCurso(obj, callback) {
    MongoClient.connect('mongodb://localhost:27017', (err, db) => {
        const treinaWebDB = db.db('treinaweb')
        treinaWebDB.collection('cursos').insertOne(obj, (err, result) => {
            callback();
        })
    })
}

//jshint app.js --config ./configHint.json