import Ember from 'ember';

export function blackWhite(params) {
  var black = "";

  for(var i=0; i< params[0].length; ++i){

    if (params[0][i] === "black"){
      black = black + '<div id="circles" style="background-color:black"></div>';
    }else if (params[0][i] === "white"){
      black = black + '<div id="circles" style="background-color:white"></div>';
    }
  }
  return Ember.String.htmlSafe(black);
}

export default Ember.Helper.helper(blackWhite);
