// 1c
const fs = require('fs');
const readline = require('readline');

let fileName = __dirname + '/about.md';
let fileData = fs.readFileSync(fileName, 'utf8');
let temp = fileData.split("\n");

//console.log("number of lines: " + (temp.length - 1));

// 1e
fileName = __dirname + '/eventData.json';
fileData = fs.readFileSync(fileName, 'utf8');
temp = JSON.parse(fileData);

let myArray = [];

for(let i in temp.events)
{
    myArray.push
    ({
        name: temp.events[i].name,
        date: temp.events[i].date,
        description: temp.events[i].description
    });
}

for(let i in myArray)
{
    console.log("name: " + myArray[i].name);
    console.log("date: " + myArray[i].date);
    console.log("description: " + myArray[i].description);
}

// 2c
let commonmark = require('commonmark');
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();

fileName = __dirname + '/about.md';
let markdownDataString = fs.readFileSync(fileName, 'utf8');

let parsed = reader.parse(markdownDataString);
let result = writer.render(parsed);

// 3b
const matter = require('gray-matter');
fileName = __dirname + '/about.md';
fileData = fs.readFileSync(fileName, 'utf8');
let metaAndContent = matter(fileData);
console.log(metaAndContent.data);

// 4c
const nunjucks = require('nunjucks');

nunjucks.configure('views', { autoescape: true });

let contents = fs.readFileSync('./content/index.html');
let outString = nunjucks.render('base.njk', {mainContent: contents});

fs.writeFileSync('./output/outputfile.html', outString);