var React = require('react');
var FilmTimes = require('./FilmTimes.jsx');

var FilmTable = function(props){

     var filmComponents = props.films.map(
          function(film){
               return(
                    <FilmTimes film={film} />
               )
          }
     );

     return(
          <table>
               {filmComponents}
          </table>
     )
}


module.exports = FilmTable;