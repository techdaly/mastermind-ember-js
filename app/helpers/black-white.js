import Ember from 'ember';

export function blackWhite(params) {
  var black;
  debugger;
  if(params.toString() === "black"){
    black= Ember.String.htmlSafe('<span class="glyphicon glyphicon-ok"></span>');
  }else if (params.toString() === "black,black,black"){
    black= Ember.String.htmlSafe('<span class="glyphicon glyphicon-ok"></span>'+'<span class="glyphicon glyphicon-ok"></span>'+'<span class="glyphicon glyphicon-ok"></span>');
  }else if (params.toString() === "white"){
    black= Ember.String.htmlSafe('<span class="glyphicon glyphicon-remove"></span>');
  } else if (params.toString() === "white,white,white"){
    black= Ember.String.htmlSafe('<span class="glyphicon glyphicon-remove"></span>'+'<span class="glyphicon glyphicon-remove"></span>'+'<span class="glyphicon glyphicon-remove"></span>');
  }else if (params.toString() === "black,white"){
    black= Ember.String.htmlSafe('<span class="glyphicon glyphicon-ok"></span>'+'<span class="glyphicon glyphicon-remove"></span>');
  }
  return black;
}

export default Ember.Helper.helper(blackWhite);
