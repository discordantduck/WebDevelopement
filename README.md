# Homework #6 Solution
**Hui Lin**

**NetID: ti2236**

## Question 1
## (a)
## (b)
## (c)
clubSSG/build
## (d)
## (e)
``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="club.css">
        <title>Main</title>
    </head>

    <body>
        <nav>
            {% include "mainMenu.html" %}
        </nav>

        <main>
            {{mainContent | safe}}
        </main>

        <footer>Copyright @ 2021 Leo Lin</footer>
    </body>
</html>
```
## (f)
``` javascript
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
```
## Question 2
## (a)
* 192.168.86.37
## (b)
IP specifies the intended address outside of a local network, whereas ethernet specifies the intended recipient within a network
## (c)
I would split the packet into smaller chunks and have a mechanism for chaining them in a way where they can recognize the next chunk in the link. The transport layer would probably have this functionality
## (d)
TCP provides error checking, whereas UDP doesn't. That's important for web traffic because precision is important in that scenario

## Question 3
## (a)
    $ node temp.js
    DNS Servers:
    [ '192.168.86.1' ]
## (b)
    Address for reddit.com
    [
    '151.101.1.140',
    '151.101.129.140',
    '151.101.65.140',
    '151.101.193.140'
    ]