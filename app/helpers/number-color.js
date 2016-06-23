import Ember from 'ember';

export function numberColor(params) {
  var guessedColor = "";

  for(var i=0; i< params[0].length; ++i) {
    if (params[0][i] === 0 ) {
      guessedColor = guessedColor +'<span class="glyphicon glyphicon-cd" style="color:#d9534f"></span>';
    } else if (params[0][i] === 1 ) {
      guessedColor = guessedColor +'<span class="glyphicon glyphicon-cd" style="color:#f0ad4e"></span>';
    } else if (params[0][i] === 2 ) {
      guessedColor = guessedColor +'<span class="glyphicon glyphicon-cd" style="color:#337ab7"></span>';
    } else {
      guessedColor = guessedColor +'<span class="glyphicon glyphicon-cd" style="color:#5cb85c"></span>';
    }
  }

  return Ember.String.htmlSafe(guessedColor);
}

export default Ember.Helper.helper(numberColor);
