var React = require('react');

var ShowTimes = React.createClass({

     handleShowTimes: function(){
          console.log("Button pressed")
     },

     render: function(){
          return(
               
               <button onClick={this.handleShowTimes} className="show_times">Show Times</button>
               
          )
     }

});

module.exports = ShowTimes;