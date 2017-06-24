var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArtlicleSchema = new Schema({
  title: {
    type: String
  },
  link: {
    type: String
  },
  date: {
  	type: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;