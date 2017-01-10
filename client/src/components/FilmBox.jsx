var React = require('react');
var MoreLink = require('./MoreLink.jsx');
var ShowTimes = require('./ShowTimes.jsx');
var FilmTable = require('./FilmTable.jsx');
var FilmTimes = require('./FilmTimes.jsx');

var movies = [
  {name: "Manchester by the Sea", url:"http://www.imdb.com/title/tt4034228/", showTimesURL: "http://www.imdb.com/showtimes/title/tt4034228"},
  {name: "Live by Night", url:"http://www.imdb.com/title/tt2361317/", showTimesURL: "http://www.imdb.com/showtimes/title/tt2361317/"},  
  {name: "A Monster Calls", url:"http://www.imdb.com/title/tt3416532/", showTimesURL: "http://www.imdb.com/showtimes/title/tt3416532/"},
  {name: "The Edge of Seventeen", url:"http://www.imdb.com/title/tt1878870/", showTimesURL:"http://www.imdb.com/showtimes/title/tt1878870/"}
];

var FilmBox = React.createClass({

     getInitialState: function(){
          return {
               data: movies
          }
     },

     render: function(){

     },
     
     handleShowTimes: function(){

     }

});

module.exports = FilmBox;