const express = require('express');
const routes = require('./server/routes')
const app = routes(express());
const path = require('path')

app.use(express.static( __dirname + '/public/dist/public' ));
app.all("*", (req,res,next) => {    
    res.sendFile(path.resolve("./public/dist/public/index.html"))   });

app.listen(8000,(err=>  err ? console.log(err) : console.log('listening on 8000 ==>') ))


// npm install express body-parser mongoose mongoose-unique-validator bcryptjs express-session path express-flash  --save
// npm install express body-parser mongoose mongoose-unique-validator --save
// npm install express body-parser mongoose  --save
// npm init -y
// ng new public
// might have to run npm install in public folder??
// cd app/src/app 
// ng g s http
// set up components - http://learn.codingdojo.com/m/4/5374/34432
// ng g c dog
