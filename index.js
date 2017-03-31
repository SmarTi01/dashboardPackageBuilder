console.log('Hello World');

var fs = require('fs');

function clean(path) {
    fs.unlinkSync(path + '/content');
    fs.unlinkSync(path + '/dashboard');
    fs.unlinkSync(path + '*.zip');
    fs.unlinkSync(path + '/index.html');


}