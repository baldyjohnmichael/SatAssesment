var express = require('express');
var app = express();
var health = require('./health.js')
var stats = require('./stats.js')
app.get('/health', function(req, res){
   res.send(health);
});
app.get('/stats', function(req, res){
    res.send(stats)
})

app.listen(3000);