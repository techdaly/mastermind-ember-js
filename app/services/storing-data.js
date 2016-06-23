import Ember from 'ember';

export default Ember.Service.extend({
  userNumbers: [],
  pegsArray: [],
  userGuess: [],
  add(userNumberArray) {
    this.set('userNumbers',userNumberArray);
  },

  addPeg(output) {
    this.get('pegsArray').pushObject(output);
  },
  addUserGuess(userInputToArray){
    this.get('userGuess').pushObject(userInputToArray);
  }

});
