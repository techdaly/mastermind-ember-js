import Ember from 'ember';

export default Ember.Route.extend({
  storingData: Ember.inject.service(),

  actions: {
    checkOutput(output){
      var isWinner = ["black", "black", "black", "black"];
      if(output.toString() === isWinner.toString()){
        alert("YOU WIN");
        window.location.reload();
      }
    }
  }
});
