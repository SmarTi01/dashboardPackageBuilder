var fs = require('fs');
var zipFolder = require('zip-folder');


var args = process.argv.slice(2);


// clean(args[0] || './');
// zip();

exports.clean = function clean() {
    if (fs.existsSync('./content')) fs.unlinkSync('/content');
    if (fs.existsSync('./dashboard')) fs.unlinkSync('/dashboard');
    if (fs.existsSync('./*.zip')) fs.unlinkSync('*.zip');
    if (fs.existsSync('./index.html')) fs.unlinkSync('index.html');
}

exports.zip = function zip() {
    zipFolder('dist', 'archive.zip', function(err) {
        if (err) throw err;
    })
}