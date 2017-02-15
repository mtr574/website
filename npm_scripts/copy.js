// copy public files into public/ folder
var fs = require('fs'),
    wd = process.cwd(),
    appFolder = wd + '/app/',
    publicFolder = wd + '/public/',
    publicFileName = ['404.html', 'index.html', 'app.js', 'config.js', 'routes.js', 'app.css'];
for (var i = 0; i < publicFileName.length; i++) {
    fs.createReadStream(appFolder + publicFileName[i]).pipe(fs.createWriteStream(publicFolder + publicFileName[i]));
}