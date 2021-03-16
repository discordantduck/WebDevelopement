// 1c
const fs = require('fs');
const readline = require('readline');

let fileName = __dirname + '/about.md';
let fileData = fs.readFileSync(fileName, 'utf8');
let temp = fileData.split("\n");

console.log(temp.length - 1);

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

console.log(myArray);

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