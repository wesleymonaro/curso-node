var fs = require('fs'),
    Promise = require('promise');

function read(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        })
    })
}

read('my_file.txt')
    .then((data) => {
        console.log(data);
        return '1111'
    })
    .catch((err) => console.log(err))
    .done((data) => console.log(data))