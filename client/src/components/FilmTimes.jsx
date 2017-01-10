var React = require('react');

var FilmTimes = React.createClass({
     render: function() {
          return(
               <tr>
                    <td><a href={this.props.url}>{this.props.name}</a></td>
                    <td><a href={this.props.showTimesURL}>Show Times</a></td>
               </tr>
          )
     }
})