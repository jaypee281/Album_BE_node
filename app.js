const express = require('express');
const bodyParser = require('body-parser');
var fs = require("fs");
const errorController = require('./controllers/error');
const albumRoutes = require('./routes/album');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res,next)=>{
res.setHeader("Access-Control-Allow-Origin","*");
res.setHeader("Access-Control-Allow-Methods","GET,POST,DELETE");
res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorisation");
next();
});
app.use('/album', albumRoutes);
app.use(errorController.get404);
app.listen(8080);