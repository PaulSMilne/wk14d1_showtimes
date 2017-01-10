var React = require('react');

var FilmTimes = function(props) {
     return(
          <tr>
               <td><a href={props.film.url}>{props.film.name}</a></td>
               <td><a href={props.film.showTimesURL}>Show Times</a></td>
          </tr>
     )
};

module.exports = FilmTimes;