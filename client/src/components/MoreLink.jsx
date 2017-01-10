var React = require('react');

var MoreLink = React.createClass({

     render: function(){
          return(
               <p className="more_link">
                    <a href="http://www.imdb.com/calendar/?region=gb">Upcoming releases for the UK</a>
               </p>
          )
     }

});

module.exports = MoreLink;