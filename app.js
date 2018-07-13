var fs = require('fs');

//CRIANDO ARQUIVO
// fs.writeFile('my_file.txt', 'Curso de Node da TreinaWeb', function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log('Arquivo criado');
// });


//LE O CONTEUDO DO ARQUIVO
// fs.readFile('my_file.txt', function (err, data) {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(data.toString());
// });


//ADICIONA CONTEUDO AO FINAL
// fs.appendFile('my_file.txt', 'Teste', function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log('Arquivo alterado');
// });


//LE O CONTEUDO DE FORMA SÍNCRONA
var data = fs.readFileSync('my_file.txt');
console.log(data.toString());