const fs = require('fs');
const readline = require('readline');

let fileName = _dirname + '/about.md';
let fileData = fs.readFileSync(fileName, 'utf8');

const readInterface = readline.createInterface
({
    input: fs.createReadStream(fileName),
})

let lineCount = 0;
readInterface.on('line', function(line)
{
    lineCount++;
});

console.log(lineCount);