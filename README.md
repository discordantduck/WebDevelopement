# Homework #8 Solution
**Hui Lin**

**NetID: ti2236**

## Question 1
## (a)
* GET
* 200, response has succeeded
* HTTP/1.1
## (b)
GET / HTTP/1.1
Host: bb.csueastbay.edu
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
DNT: 1
Connection: keep-alive
Cookie: CID=AgAAAKPt19d+6yaNokCVX//YD6k=; AWSELB=D3570BC914533D9ACC5FBEA2A258730F699E691A0A84204135C8204047B9554F8F45DB335BCF23231EED62A29DC2BE901660F86BA08E94330E51971866148E2B75D712BFAB; AWSELBCORS=D3570BC914533D9ACC5FBEA2A258730F699E691A0A84204135C8204047B9554F8F45DB335BCF23231EED62A29DC2BE901660F86BA08E94330E51971866148E2B75D712BFAB; samlSessionId=576D9F1D5DEB85528C237D421B3E8E0F; BbRouter=expires:1617842696,id:6632E8E67269DB6953468138A2AF23EB,signature:a8bcc14ec94e7b1c83b741231595866f161c565bf06d4df751aec1c07c232812,site:aefdf5db-8c6a-4e8e-8bf7-fb9f1f4dcdf0,v:2,xsrf:8a0994fe-bfba-4b9f-a8f4-892e3ffffe05; JSESSIONID=13D370BCF43B26908AD1616386A4E4E5
Upgrade-Insecure-Requests: 1
Sec-GPC: 1
Cache-Control: max-age=0
## (c)
HTTP/1.1 200 
Cache-Control: private, max-age=0, no-store, must-revalidate
Content-Encoding: gzip
Content-Language: en-US
Content-Security-Policy: frame-ancestors 'self'
Content-Type: text/html;charset=UTF-8
Date: Thu, 08 Apr 2021 00:15:01 GMT
Expires: Wed, 08 Apr 2020 00:15:01 GMT
Last-Modified: Sun, 08 Apr 2001 00:15:01 GMT
P3P: CP="CAO PSA OUR"
Pragma: private
Server: openresty/1.15.8.3
Set-Cookie: BbRouter=expires:1617842701,id:6632E8E67269DB6953468138A2AF23EB,signature:3d02deb616d5918a222fc475ec6224264c46923aeb4841bd034d0002b694a12b,site:aefdf5db-8c6a-4e8e-8bf7-fb9f1f4dcdf0,v:2,xsrf:8a0994fe-bfba-4b9f-a8f4-892e3ffffe05; Path=/; Secure; HttpOnly
vary: accept-encoding
X-Blackboard-appserver: ip-10-145-29-31.ec2.internal
X-Blackboard-product: Blackboard Learn &#8482; 3900.8.0-rel.37+0b5fb53
X-Frame-Options: SAMEORIGIN
Content-Length: 20590
Connection: keep-alive
## (d)
* Server: openresty/1.15.8.3
* yes, Cookie: CID=AgAAAKPt19d+6yaNokCVX//YD6k=; AWSELB=D3570BC914533D9ACC5FBEA2A258730F699E691A0A84204135C8204047B9554F8F45DB335BCF23231EED62A29DC2BE901660F86BA08E94330E51971866148E2B75D712BFAB; AWSELBCORS=D3570BC914533D9ACC5FBEA2A258730F699E691A0A84204135C8204047B9554F8F45DB335BCF23231EED62A29DC2BE901660F86BA08E94330E51971866148E2B75D712BFAB; samlSessionId=576D9F1D5DEB85528C237D421B3E8E0F; BbRouter=expires:1617842696,id:6632E8E67269DB6953468138A2AF23EB,signature:a8bcc14ec94e7b1c83b741231595866f161c565bf06d4df751aec1c07c232812,site:aefdf5db-8c6a-4e8e-8bf7-fb9f1f4dcdf0,v:2,xsrf:8a0994fe-bfba-4b9f-a8f4-892e3ffffe05; JSESSIONID=13D370BCF43B26908AD1616386A4E4E5
## (e)
each method takes the return value of the previous function in the chain as the argument
## (f)
    protocol: https
    domain: developer.mozilla.org
    port: 
    path: docs/Web/JavaScript/Guide/Grammar_and_Types
    query: en-US
    fragment portion: Comments

    protocol: https
    domain: www.google.com
    port: 
    path: search
    query: ?q=gaia+mission&rlz=1CYPO_enUS751
    fragment portion:

    protocol: http
    domain: 127.0.0.2
    port: 8282
    path: static/index.html
    query:
    fragment portion:

## Question 2
## (a)
    Is this the start?
    When does this print?
    Is this the end?
    this is a msg from CS651
    This is a msg from CS351

    setTimeout() delays the completion of the function call until everything else in the program has been completed

    no, it's the same
## (b)
    randomizes a time for each promise to resolve, and racingPs has the result from the first one to resolve

    add the line "racingPs.then((msg) => console.log(msg));"
## (c)
![2c](/images/2c.png)
## (d)
![2d](/images/2d.png)

## Question 3
## (a)
![3a](/images/3a.png)
## (b)
![3b](/images/3b.png)
## (c)
![3c](/images/3c.png)

## Question 4
## (a)
![4a](/images/4a.png)
## (b)
``` javascript
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public'))); 
const nunjucks = require('nunjucks');
nunjucks.configure(path.join(__dirname, 'templates'), {
    autoescape: true,
    express: app
});

const host = '127.0.0.2';
const port = 3001;

let count = 0;
let startDate = new Date();
let yourName = 'Leo L.';
let netId = '2236';

app.get('/', function (req, res) {
    count++;
    let info = {host: host, port: port, count: count, startDate: startDate.toLocaleString(), yourName: yourName, netId: netId}
    res.render('default.njk', info);
});

let temp = new Date(Date.now());

app.get('/uptime', function(req, res){
    let temp2 = new Date();
    let info = {host: host, port: port, startTime: temp, currentTime: temp2}
    res.render('uptime.njk', info);
});

app.listen(port, host, function () {
    console.log(`deployTest app listening on IPv4: ${host}:${port}`);
});
```
## (c)
``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {% block metaStuff %}
        {% endblock %}
        <link href="css/club.css" rel="stylesheet">
    </head>

    <body>
        <main>
            {% block main %}
            {% endblock %}
        </main>
        
        <footer>
            <p>Copyright @ 2021 Leo Lin</p>
        </footer>
    </body>
</html>
```
## (d)
``` html
{% extends "base.njk" %}

{% block metaStuff %}
    <title>Server Uptime</title>
{% endblock %}
    
{% block main %}
    <h2>count: {{count}}</h2>
    <h2>startDate: {{startDate}}</h2>
    <h2>yourName: {{yourName}}</h2>
    <h2>netId: {{netId}}</h2>
{% endblock %}
```
## (e)
![4e](/images/4e.png)
## (f)
![4f](/images/4f.png)