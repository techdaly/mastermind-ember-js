import Ember from 'ember';

export default Ember.Component.extend({
  storingData: Ember.inject.service(),
  genNumber: Ember.inject.service(),

  actions: {
    guess() {
      var randomArray = this.get('genNumber').get('randomArray');
      var computerGenerator = randomArray.slice();

      var params = [];
      var output = [];

      params.push(parseInt(this.get('number0')));
      params.push(parseInt(this.get('number1')));
      params.push(parseInt(this.get('number2')));
      params.push(parseInt(this.get('number3')));
      this.get('storingData').add(params);

      var userInputToArray= this.get('storingData.userNumbers').toArray();
      if(this.get('checkUserGuess') === ["black","black","black","black"]){
        alert("you won");
      }


        for(var y = 0; y < computerGenerator.length; ++ y) {
          if (computerGenerator[y] === userInputToArray[y]) {
            computerGenerator.splice(y,1,null);
            userInputToArray.splice(y,1,null);
            output.push("black");
          }
        }

        for(var y = 0; y < computerGenerator.length; ++ y) {
          if(userInputToArray.indexOf(computerGenerator[y])>-1 && computerGenerator[y] != null) {
            userInputToArray.splice(userInputToArray.indexOf(computerGenerator[y]),1,null);
            output.push("white");
          }
        }

        this.sendAction('checkOutput', output);
      }
    }
});
