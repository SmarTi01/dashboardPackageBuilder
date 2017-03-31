var fs = require('fs');

exports.message = function() {
	console.log('Hello World');
}

// function clean(path) {
//     fs.unlinkSync(path + '/content');
//     fs.unlinkSync(path + '/dashboard');
//     fs.unlinkSync(path + '*.zip');
//     fs.unlinkSync(path + '/index.html');
// }