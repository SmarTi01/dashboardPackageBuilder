var fs = require('fs');
var zipFolder = require('zip-folder');


var args = process.argv.slice(2);


// clean(args[0] || './');
// zip();

exports.clean = function clean(path) {
    if (fs.existsSync(path + '/content')) fs.unlinkSync(path + '/content');
    if (fs.existsSync(path + '/dashboard')) fs.unlinkSync(path + '/dashboard');
    if (fs.existsSync(path + '*.zip')) fs.unlinkSync(path + '*.zip');
    if (fs.existsSync(path + '/index.html')) fs.unlinkSync(path + 'index.html');
}

exports.zip = function zip() {
    zipFolder('dist', 'archive.zip', function(err) {
        if (err) throw err;
    })
}