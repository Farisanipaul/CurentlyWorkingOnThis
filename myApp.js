var express = require('express');
var app = express();


absolutePath = __dirname + "/views/index.html";


app.get("/", function(req,res){
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));
  




































 module.exports = app;
