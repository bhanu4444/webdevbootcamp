var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/",function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
           var data =  JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.get("/movies/:movie", function (req, res) {
    var movie_name = req.params.movie;
    var url = "http://www.omdbapi.com/?t=" + movie_name + "&apikey=thewdb";
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("info", { data: data });
        }
    });
});


app.get("/info", function(req, res){

});

app.listen(3000, function(){
    console.log("Movie app has started");
});