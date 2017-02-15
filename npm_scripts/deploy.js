// Write script for published index.html
var fs = require('fs'),
    indexFile = 'app/index.html',
    gaFile = 'app/content/js/vendor/ga.min.js',
    gaText = '<script>' + fs.readFileSync(gaFile, 'utf-8') + '</script>',
    indexText = fs.readFileSync(indexFile, 'utf-8').split(/<!-- @@GOOGLE_ANALYTICS@@ -->/).join('///<!-- @@GOOGLE_ANALYTICS@@ -->/\\n' + gaText + '///<!-- @@END--GOOGLE_ANALYTICS@@ -->/');
fs.writeFileSync(indexFile, indexText);
