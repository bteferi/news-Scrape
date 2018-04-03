// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "nytArticles";
var collections = ["nytData"];

// Hook mongojs configuration to the db variable - from npm docs
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/", function (req, res){
    res.send("Hello World")
});

// route 1
// this will retrive data from nyt


// find everything - do 20 articles
app.get("/all", function(req, res) {
  // Find all results from the scrapedData collection in the db
  db.nytData.find({}, function(error, found) {
    // Throw any errors to the console
    if (error) {
      console.log(error);
    }
    // If there are no errors, send the data to the browser as json
    else {
      res.json(found);
    }
  });
});






















// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
