// inject script into public/index.html
var fs = require('fs'),
    wd = process.cwd(),
    indexFilePath = wd + '/public/index.html',
    gaScript = wd + '/app/content/js/vendor/ga.min.js',
    gaScriptText = '<script>' + fs.readFileSync(gaScript, 'utf-8') + '</script>',
    indexText = fs.readFileSync(indexFilePath, 'utf-8').split(/<!-- @@GOOGLE_ANALYTICS@@ -->/).join('<!-- @@GOOGLE_ANALYTICS@@ -->' + gaScriptText + '<!-- @@END__GOOGLE_ANALYTICS@@ -->');
fs.writeFileSync(indexFilePath, indexText);
