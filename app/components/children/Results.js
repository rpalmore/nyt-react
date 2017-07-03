var React = require("react");

var Results = React.createClass({
  render: function() {
   // if (this.props.title) {
    return (
      <div className="searchContainer">
        <div className="containerName">
         <h4>Results</h4>
          <ul className="collection with-header">
            <li className="collection-header">
              <h5>{this.props.title}</h5>
            </li>
            <li className="collection-item">{this.props.summary}<br />{this.props.pubdate}<a href="#" className="secondary-content"><i className="material-icons" id="saveArticle">library_add</i></a></li>
            <li className="collection-header">
              <h5>{this.props.title2}</h5>
            </li>
            <li className="collection-item">{this.props.summary2}<br />{this.props.pubdate2}<a href="#" className="secondary-content"><i className="material-icons" id="saveArticle">library_add</i></a></li>
            <li className="collection-header">
              <h5>{this.props.title3}</h5>
            </li>
            <li className="collection-item">{this.props.summary3}<br />{this.props.pubdate3}<a href="#" className="secondary-content"><i className="material-icons" id="saveArticle">library_add</i></a>
            </li>
            <li className="collection-header">
              <h5>{this.props.title4}</h5>
            </li>
            <li className="collection-item">{this.props.summary4}<br />{this.props.pubdate4}<a href="#" className="secondary-content"><i className="material-icons" id="saveArticle">library_add</i></a>
            </li>
            <li className="collection-header">
              <h5>{this.props.title5}</h5>
            </li>
            <li className="collection-item">{this.props.summary5}<br />{this.props.pubdate5}<a href="#" className="secondary-content"><i className="material-icons" id="saveArticle">library_add</i></a>
            </li>
          </ul>
       </div>
      </div>
    );
  // }
 }
});

module.exports = Results;