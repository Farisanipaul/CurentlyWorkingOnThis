var express = require('express');
var app = express();


//absolutePath = __dirname + "/views/index.html";


app.get("/json", function(req,res){
  res.json({"message": "Hello Json"});
});

//app.use("/public", express.static(__dirname + "/public"));
  




































 module.exports = app;
