// Borrowing from 061717 Address-Finder-Solution
console.log("I'm a helper.")
// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT authKey
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper functions for making API Calls
var helper = {
  // This function serves our purpose of running the query to find articles.
  runQuery: function(topic, startyear, endyear) {

    console.log(topic, startyear, endyear); 

    // Set up queryURL
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + topic + "&begin_date=" + startyear + "&end_date=" + endyear
    console.log("queryURL: " + queryURL);
    return axios.get(queryURL).then(function(response) {
      // If we get a result, return the needed data
      if (response) {
        // for loop not returning more results
        // only returning first item
        return response.data; 
        // for (var i = 0; i < 5; i++) {
        //   console.log("TITLE: " + response.data.response.docs[i].headline.main);
        //   console.log("SUMMARY: " + response.data.response.docs[i].snippet);
        //   console.log("PUBLISHED DATE: " + response.data.response.docs[i].pub_date);
        //   console.log("LINK: " + response.data.response.docs[i].web_url);
      } else {
        console.log("No RESULTS");
        return "";
        }
    });
  },

  // This function hits our own server to retrieve the record of query results
  getArticle: function() {
    return axios.get("/api");
  },

  // This function posts query results to our database.
  postArticle: function(title, summary, pubdate, link) {
    console.log("Here is my post method");
    for (var i = 0; i < 5; i++) {
      return axios.post("/api", { title: title, summary: summary, pubdate: pubdate, link: link });
      console.log("Hey! Made it to post articles");
    // return axios.post("/api", { title: response.data.response.docs[i].headline.main, summary: response.data.response.docs[i].snippet, pubdate: response.data.response.docs[i].pub_date,link: response.data.response.docs[i].web_url });
    }
  }
};

// We export the API helper
module.exports = helper;
