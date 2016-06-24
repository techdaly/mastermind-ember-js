import Ember from 'ember';

export default Ember.Route.extend({
  storingData: Ember.inject.service(),

  actions: {
    checkOutput(output){
      var winnerArray = [];

      var isWinner = ["black", "black", "black", "black"];
      if(output.toString() === isWinner.toString()){

        for(var i=0; i< this.get('storingData.userNumbers').length; ++i) {

          if(this.get('storingData.userNumbers')[i] === 0) {
            winnerArray.push("RED");
          } else if (this.get('storingData.userNumbers')[i] === 1) {
            winnerArray.push("YELLOW");
          } else if (this.get('storingData.userNumbers')[i] === 2) {
            winnerArray.push("BLUE");
          } else if (this.get('storingData.userNumbers')[i] === 3) {
            winnerArray.push("GREEN");
          }
      }
     }

     alert("YOU WIN" + " THE CODE WAS: " + winnerArray);
     window.location.reload();
    }
  }
});
