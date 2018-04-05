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
var collections = ["Headline"];

// Hook mongojs configuration to the db variable - from npm docs
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/", function(req, res) {
  res.send("Hello World")
});

// route 1
// this will retrive data from nyt


// find everything - do 20 articles
app.get("/all", function(req, res) {
  // Find all results from the scrapedData collection in the db
  db.Headline.find({}, function(error, found) {
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

//=================
// Scrape data from one site and place it into the mongodb db
//=================

app.get("/scrape", function(req, res) {

  request("https://www.nytimes.com/", function(error, response, html) {

    var $ = cheerio.load(html);

    $(".story-heading").each(function(i, element) {
      var title = $(this).children("a").text();
      var link = $(this).children("a").attr("href");
      //==================if they both exist save in to db ===================
      if (title && link) {
        // Insert the data in the scrapedData db
        db.Headline.insert({
            title: title,
            link: link
          },
          function(err, saved) {
            if (err) {
              // Log the error if one is encountered during the query
              console.log(err);
            } else {
              // Otherwise, log the inserted data
              console.log(saved);
            }
          });


      }

    });
  })
  res.send("NYT Scrape Complete");
})









// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
