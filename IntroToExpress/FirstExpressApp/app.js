var express = require("express");
var app = express();

app.get("/",function(req, res){
    res.send("Hello");
});




app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("This is a " + subreddit + " subreddit");
});

app.get("*",function(req, res){
    res.send("NA");
});

app.listen(3000,function(){
    console.log("Server started");
});