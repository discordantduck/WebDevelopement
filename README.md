# Homework #10 Solution
**Hui Lin**

**NetID: ti2236**

## Question 1
## (a)
![1a](/images/1a.PNG)
## (b)
![1b](/images/1b.PNG)

## Question 2
## (a)
![2a](/images/2a.PNG)
## (b)
https://www.drbsclasses.org/student15/node/

## Question 3
## (a)
```
npm init
```
## (b)
``` json
{
  "name": "clubreact",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "parcel-bundler": "^1.12.5",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}

```
## (c)
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <!-- <link rel="stylesheet" href="index.css" /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Leo's First React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="index.js"></script>
</body>
</html>
```
## (d)
``` javascript
// index.js file
import React from "react";
import ReactDOM from "react-dom";

let myName = "Leo"; // Use your name not mine!!!
let contents = <section>
    <h1>Hello from React</h1>
    <h2>{myName}</h2>
  </section>;

ReactDOM.render(contents, document.getElementById("root"));
```
## (e)
![3e1](/images/3e1.PNG)
![3e2](/images/3e2.PNG)

## Question 4
## (a)
## (b)
![4b](/images/4b.PNG)
## (c)
![4c](/images/4c.PNG)

## Question 5
## (a)
![5a](/images/5a.PNG)
## (b)
![5b](/images/5b.PNG)