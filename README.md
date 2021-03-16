# Homework #5 Solution
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
![4b.png](images/4b.PNG)
## (c)