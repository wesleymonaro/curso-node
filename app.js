var express = require('express');

var app = express();

app.use(express.static('public')) // http://localhost:3000/index.html
app.use('/static', express.static('public')) // http://localhost:3000/static/index.html

app.get(/((sh)|(x))amp(o{2}|u)/, (req, res) => { //usando regex para permitir variações
    res.send('Hello World ' + req.params.id)
})

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
})