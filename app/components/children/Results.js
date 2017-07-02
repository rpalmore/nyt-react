var React = require("react");

var Results = React.createClass({

  render: function() {
    return (
      <div className="searchContainer">
        <div className="containerName">
         <h4>Results</h4>

      <ul className="collection with-header">
        <li className="collection-header"><h5></h5></li>
        <li className="collection-item"><div><a href="" className="secondary-content"><i className="material-icons">library_add</i></a></div></li>
      </ul>
       </div>
      </div>

    );
  }
});

module.exports = Results;