var React = require('react');
var FilmTable = require('./FilmTable.jsx');
var MoreLink = require('./MoreLink.jsx');
var ShowTimes = require('./ShowTimes.jsx');

var movies = [
  {name: "Manchester by the Sea", url:"http://www.imdb.com/title/tt4034228/", showTimesURL: "http://www.imdb.com/showtimes/title/tt4034228", id:"tt4034228"},
  {name: "Live by Night", url:"http://www.imdb.com/title/tt2361317/", showTimesURL: "http://www.imdb.com/showtimes/title/tt2361317/", id:"tt2361317"},  
  {name: "A Monster Calls", url:"http://www.imdb.com/title/tt3416532/", showTimesURL: "http://www.imdb.com/showtimes/title/tt3416532/", id:"tt3416532"},
  {name: "The Edge of Seventeen", url:"http://www.imdb.com/title/tt1878870/", showTimesURL:"http://www.imdb.com/showtimes/title/tt1878870/", id:"tt1878870"}
];

var FilmBox = React.createClass({

  handleShowTimes: function(){
       console.log("Button pressed");
       window.open("http://www.imdb.com/showtimes/location/UK/EH1%202RL");
  },

     getInitialState: function(){
          return {
               data: movies
          }
     },

     render: function(){
          return(
               <div className='film_box'>

                    <h1>FilmBox file running</h1>

                    <FilmTable films={this.state.data}/>

                    <MoreLink />
                    
                    <p>
                    <ShowTimes handleShowTimes={this.handleShowTimes}/>
                    </p>

               </div>
          );
     },

});

module.exports = FilmBox;