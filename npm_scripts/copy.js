// copy public files into public/ folder
var fs = require('fs'),
    wd = process.cwd(),
    appFolder = wd + '/app/',
    publicFolder = wd + '/public/',
    publicFileName = ['404.html', 'index.html', 'app.js', 'config.js', 'routes.js', 'app.css'];
for (var i = 0; i < publicFiles.length; i++) {
    fs.createReadStream(publicFileFolder + publicFiles[i]).pipe(fs.createWriteStream(appFolder + publicFileName[i]));
}