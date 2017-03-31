var fs = require('fs');
var admZip = require('adm-zip');


var args = process.argv.slice(2);


clean(args[0] || './');
zip();

function clean(path) {
    if (fs.existsSync(path + '/content')) fs.unlinkSync(path + '/content');
    if (fs.existsSync(path + '/dashboard')) fs.unlinkSync(path + '/dashboard');
    if (fs.existsSync(path + '*.zip')) fs.unlinkSync(path + '*.zip');
    if (fs.existsSync(path + '/index.html')) fs.unlinkSync(path + 'index.html');
}

function zip() {
    var zip = new admZip();
    zip.addLocalFolder('dist');
    zip.writeZip("test.zip");
}