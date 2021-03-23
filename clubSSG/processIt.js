constfs = require('fs');// File system module
let commonmark = require('commonmark');

let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();
let fname = __dirname +'/application.md';

let fdata = fs.readFileSync(fname,'utf8');
let parsed = reader.parse(fdata);
let result = writer.render(parsed);

fs.writeFileSync(__dirname +'/application.html', result);