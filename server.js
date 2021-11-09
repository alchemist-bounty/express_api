var express = require('express');
var app=express();
const path = require('path');
const fs =require('fs');

let rawdata = fs.readFileSync(path.resolve(__dirname, 'student.json'));
const students = JSON.parse(rawdata);

console.log(students);

app.get('/list-receipes/:id', function(req, res) {
    res.send('Hello World');
    console.log(req.query.abc);
    console.log(req.params.id);
})


var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('App is listeneing at %s:%s', host, port);
})