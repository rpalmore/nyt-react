// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require History Schema
var Article = require("./models/Article");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
// mongoose.connect("mongodb://admin:codingrocks@ds023664.mlab.com:23664/reactlocate");
// NOTE: Setting up my own DB connection
mongoose.connect("mongodb://localhost/nytReact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/saved", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/api/saved"), function(req, res) {
  Article.create({
    title: req.data.response.docs.headline.main,
    summary: req.data.response.docs.snippet,
    pubdate: req.data.response.docs.pub_date,
    link: req.data.response.docs.web_url
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.redirect("/");
    }
  })
};


// This is the route we will send POST requests to save each search.
// app.post("/api", function(req, res) {
//   console.log("BODY: " + req);

//   // Here we'll save the location based on the JSON input.
//   // We'll use Date.now() to always get the current date time
//   Article.create({
//     title: req.data.response.docs.headline.main,
//     summary: req.data.response.docs.snippet,
//     pubdate: req.data.response.docs.pub_date,
//     link: req.data.response.docs.web_url
//   }, function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Saved Search");
//     }
//   });
// });

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
