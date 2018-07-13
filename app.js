var EventEmitter = require('events');

// var emitter = new EventEmitter();

// emitter.on('meu_evento', function (numero) {
//     console.log('meu evento', numero);
// })

// emitter.emit('meu_evento', 123)


class Cao extends EventEmitter{
    latir(){
        console.log('au au');
    }
}

var Rex = new Cao();

Rex.on('pessoa_no_portao', Rex.latir);
Rex.once('pessoa_no_portao', Rex.latir); //Só executa uma vez

Rex.emit('pessoa_no_portao');
Rex.emit('pessoa_no_portao');
Rex.removeListener('pessoa_no_portao', Rex.latir)
Rex.emit('pessoa_no_portao');