//use express
var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true }));



//set view engine so not to write .ejs with ejs templates
app.set("view engine","ejs");

//campgrounds
var campgrounds = [
    { name: "Salomon Creek", image: "https://farm1.staticflickr.com/54/146026207_2740370ba6_m.jpg" },
    { name: "Granite Hill", image: "https://farm2.staticflickr.com/1194/910520283_0c3f9b79d9_m.jpg" },
    { name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5808/30644904055_238cce6752_m.jpg" },
    { name: "Salomon Creek", image: "https://farm1.staticflickr.com/54/146026207_2740370ba6_m.jpg" },
    { name: "Granite Hill", image: "https://farm2.staticflickr.com/1194/910520283_0c3f9b79d9_m.jpg" },
    { name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5808/30644904055_238cce6752_m.jpg" },
    { name: "Salomon Creek", image: "https://farm1.staticflickr.com/54/146026207_2740370ba6_m.jpg" },
    { name: "Granite Hill", image: "https://farm2.staticflickr.com/1194/910520283_0c3f9b79d9_m.jpg" },
    { name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5808/30644904055_238cce6752_m.jpg" },
    { name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5808/30644904055_238cce6752_m.jpg" },
    { name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5808/30644904055_238cce6752_m.jpg" },
    { name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5808/30644904055_238cce6752_m.jpg" },
    { name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5808/30644904055_238cce6752_m.jpg" }
];

//Landing Page
app.get("/",function(req, res){
    res.render("landing");
});

//Campgrounds page
app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds: campgrounds});
});

//To add new campground to campgrounds page
app.post("/campgrounds",function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    
     res.redirect("/campgrounds");

});

//Form for submitting new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//To start server
app.listen(3000, function(){
    console.log("Yelp Camp server has started");
});