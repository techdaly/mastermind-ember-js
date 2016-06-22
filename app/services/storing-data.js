import Ember from 'ember';

export default Ember.Service.extend({
  userNumbers: [],
  pegsArray: [],
  userGuess: [],
  add(userNumberArray) {
    this.set('userNumbers',userNumberArray);
    console.log(this.get('userNumbers'));
  },

  addPeg(output) {
    this.get('pegsArray').pushObject(output);
    // console.log("pegsArray is : " + this.get('pegsArray'));
  },
  addUserGuess(userInputToArray){
    this.get('userGuess').pushObject(userInputToArray);
  }

});
