import Ember from 'ember';

export function blackWhite(params) {
  var black = "";

  for(var i=0; i< params[0].length; ++i){

    if (params[0][i] === "black"){
      black = black + '<span class="glyphicon glyphicon-plus-sign"></span>';
    }else if (params[0][i] === "white"){
      black = black + '<span class="glyphicon glyphicon-minus-sign"></span>';
    }
  }

  return Ember.String.htmlSafe(black);
}

export default Ember.Helper.helper(blackWhite);
