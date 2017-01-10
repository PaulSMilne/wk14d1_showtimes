var React = require('react');
var FilmTimes = require('./FilmTimes.jsx');

var FilmTable = React.createClass({

     render: function(){

          var filmComponents = this.props.films.map(
               function(filmObject){
                    return(
                         <FilmTimes key={filmObject.id} name={filmObject.name}>
                         </FilmTimes>
                    )
               }
          );

          return(
               <p>Film table goes here</p>
          )
     }

});

module.exports = FilmTable;