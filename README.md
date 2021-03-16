# Homework #6 Solution
**Hui Lin**

**NetID: ti2236**

## Question 1
## (a)
version 14.16.0
## (b)
``` markdown
# Heading

Sample text

## Another heading
* Unordered list
1. one
2. two
3. tree
```
## (c)
![1c.png](images/1c.PNG)
## (d)
JSON
``` json
{"events":
    [
        {
            "name": "Speedrun",
            "date": "March 32",
            "description": "Complete Dark Souls as fast as you can"
        },
        {
            "name": "No hit",
            "date": "April 1",
            "description": "Complete Dark Souls without getting hit or staggered"
        },
        {
            "name": "Deathless",
            "date": "Febuary 30",
            "description": "Complete Dark Souls without dying"
        }
    ]
}
```
## (e)
![1e.png](images/1e.PNG)
## Question 2
## (a)
typed "npm init --yes" in the terminal
## (b)
![2b.png](images/2b.PNG)
## (c)
``` javascript
let commonmark = require('commonmark');
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();

fileName = __dirname + '/about.md';
let markdownDataString = fs.readFileSync(fileName, 'utf8');

let parsed = reader.parse(markdownDataString);
let result = writer.render(parsed);
```

![2c.png](images/2c.PNG)
## Question 3
## (a)
![3a.png](images/3a.PNG)
## (b)
![3b.png](images/3b.PNG)

## Question 4
## (a)
![4a.png](images/4a.PNG)
## (b)
``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>{{title}}</title>
        <title>{{author}}</title>
        <title>{{description}}</title>
    </head>
    <body>
    <nav>
        
    </nav>
    <main>
        {{mainContent | safe}}
    </main>
    </body>
</html>
```
## (c)
``` javascript
// 1c
const fs = require('fs');
const readline = require('readline');

let fileName = __dirname + '/about.md';
let fileData = fs.readFileSync(fileName, 'utf8');
let temp = fileData.split("\n");

console.log("number of lines: " + (temp.length - 1));

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

let contents = fs.readFileSync('./content/outputfile.html');
let outString = nunjucks.render('base.njk', {mainContent: contents});

fs.writeFileSync('./output/about.html', outString);
```

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <title></title>
        <title></title>
    </head>
    <body>
    <nav>
        
    </nav>
    <main>
        <h1>Heading</h1>
<p>Sample text</p>
<h2>Another heading</h2>
<ul>
<li>Unordered list</li>
</ul>
<ol>
<li>one</li>
<li>two</li>
<li>tree</li>
</ol>

    </main>
    </body>
</html>
```