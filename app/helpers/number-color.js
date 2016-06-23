import Ember from 'ember';

export function numberColor(params) {
  var guessedColor = "";

  for(var i=0; i< params[0].length; ++i) {
    if (params[0][i] === 0 ) {
      guessedColor = guessedColor +'<div id="circles" style="background-color:#d9534f"></div>';
    } else if (params[0][i] === 1 ) {
      guessedColor = guessedColor +'<div id="circles" style="background-color:#f0ad4e"></div>';
    } else if (params[0][i] === 2 ) {
      guessedColor = guessedColor +'<div id="circles" style="background-color:#337ab7"></div>';
    } else {
      guessedColor = guessedColor +'<div id="circles" style="background-color:#5cb85c"></div>';
    }
  }

  return Ember.String.htmlSafe(guessedColor);
}

export default Ember.Helper.helper(numberColor);
