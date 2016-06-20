import Ember from 'ember';

export default Ember.Component.extend({
  genNumber: Ember.inject.service(),

  playerArray: [2, 3, 0, 1],


  actions: {

    matchArray() {
      var compArray = this.get('genNumber').get('randomArray');
      var userGuess = this.get('playerArray');
      console.log(compArray);
      console.log(userGuess);
      //--This loops through each item in compArray
      for (var i=0; i<compArray.length; i++) {
        //For each item in compArray, run loop through userGuess
        for (var j=0; j<userGuess.length; j++){
          if (compArray[i] === userGuess[j]) {
            console.log("match!");
          } else {
            console.log("wrong!");
          }
        }

        // if(compArray[i] === userGuess[i]){
        //   console.log("match");
        // } else {
        //   console.log("wrong");
        // }
      }
    }
  }
});
