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

