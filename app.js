var express = require('express');
var app=express();
const path = require('path');
const fs =require('fs');

let rawdata = fs.readFileSync(path.resolve(__dirname, 'student.json'));
const students = JSON.parse(rawdata);

console.log(students);



app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('App is listeneing at %s:%s', host, port);
})