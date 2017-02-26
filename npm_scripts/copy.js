// copy public files into public/ folder
var fs = require('fs'),
    wd = process.cwd(),
    appFolder = wd + '/app/',
    viewsFolder = wd + '/app/views',
    publicFolder = wd + '/public/',
    publicFileName = ['404.html', 'index.html', 'app.js', 'config.js', 'routes.js', 'app.css'];
// copy files
for (var i = 0; i < publicFileName.length; i++) {
    fs.createReadStream(appFolder + publicFileName[i]).pipe(fs.createWriteStream(publicFolder + publicFileName[i]));
}

// copy views
// TODO: copy files from views folder into public
