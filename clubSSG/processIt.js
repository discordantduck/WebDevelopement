const fs = require('fs');

// common mark
let commonmark = require('commonmark');
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();

// gray matter
const matter = require('gray-matter');

// nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('views', { autoescape: true });

// files to read
let srcPrefix = __dirname + "/src";
let bldPrefix = __dirname + "/build";
let allFiles = fs.readdirSync(srcPrefix);

console.log("Processing the src directory: ");
allFiles.forEach(function(srcName) {
    console.log('Reading ' + srcName);

    // get data about file
    let fname = srcPrefix + '/' + srcName;
    let fdata = fs.readFileSync(fname, 'utf8');

    // file processing
    let metaAndContent = matter(fdata);
    let parsed = reader.parse(metaAndContent.content);
    let result = writer.render(parsed);
    let outString = nunjucks.render('base.njk', {mainContent: result, data: metaAndContent.data});

    // write the file
    let outName = (bldPrefix + '/' + srcName).replace(".md", ".html");
    fs.writeFileSync(outName, outString);
});