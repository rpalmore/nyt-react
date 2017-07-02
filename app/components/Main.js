// Include React
var React = require("react");

// Here we include all of the sub-components
var Results = require("./children/Results");
var Saved = require("./children/Saved");
var Search = require("./children/Search");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({
  // Here we set a generic state associated with the page
  getInitialState: function() {
    return { searchTopic: "", results: [], saved: [] };
    console.log("Initial state?");
  },

  // If the component changes (i.e. if search terms are entered) ...
  componentDidUpdate: function() {
    // Run the query for the search topic
    helpers.runQuery(this.state.searchTopic, this.state.searchStartyear, this.state.searchEndyear).then(function(data) {
      console.log("component did update!");
      // if (data) {
        console.log("This is the data: ", data);
        console.log("This is first headline: ", data.response.docs[0].headline.main);
        // this.setState({ results: data.response.docs[0].headline.main });
      // }
    });
        
  //   helpers.postArticle(data).then(function() {
  //         console.log("Updated!");
  // });
  },

  // This function allows childrens to update the parent.
  setSearch: function(topic, startyear, endyear) {
    this.setState ({ searchTopic: topic, searchStartyear: startyear, searchEndyear: endyear})
    // console.log("Main topic: " + topic);
    // console.log("Start year: " + startyear);
    // console.log("End year: " + endyear);
  },

  // Here we render the function
  render: function() {
    return (
	 <div className="main-container">
 	  <nav>
  	    <div className="nav-wrapper">
    	 <a href="#" className="brand-logo">Logo</a>
     	  <ul id="nav-mobile" className="right hide-on-med-and-down">
     		<li><a href="#">Search</a></li>
        	<li><a href="#">Results</a></li>
        	<li><a href="#">Saved</a></li>
          </ul>
  		</div>
 	  </nav>
  	  <div className="container grid">
    	<div className="row grid-name">
      		<div className="col s12 center">
      			<Search setSearch={this.setSearch} />
      		</div>
      	</div>
      </div>
      <div className="container grid">
    	<div className="row grid-name">
      		<div className="col s12 center">
      			<Results title={this.state.results}/>
      		</div>
      	</div>
      </div>
     </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
