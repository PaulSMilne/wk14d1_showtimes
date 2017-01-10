var React = require('react');

var ShowTimes = function(props){
     return(
          <button onClick={props.handleShowTimes} className="show_times">Show Times</button>
     )
}

module.exports = ShowTimes;