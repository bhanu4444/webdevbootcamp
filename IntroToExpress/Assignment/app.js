//Include and use the express
var express = require("express");
var app = express();

//to Print Hi there, welcome to my assignment when "/" url is selected
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment");
});

//visiting "/speak/pig" should print "The pig says Oink" cow says moo dog says woof woof
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof"
    };
    
    var sound = sounds[animal];
    
    
    res.send("The "+ animal + " says " + sound);
});

app.get("/repeat/:str/:n",function(req, res){
    var message = req.params.str;
    var n = req.params.n;
    var result="";
    for(i=0;i<n;i++){
        result+=message + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
    res.send("No animal found");
});

//To start the local server
app.listen(3000, function(){
   console.log("Server started"); 
});

