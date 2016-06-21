import Ember from 'ember';

export default Ember.Component.extend({
  storingData: Ember.inject.service(),
  actions: {
    guess() {
      var computerGenerator=["1","2","1","4"];
      var params = [];
      var output = [];

      params.push(this.get('number0'));
      params.push(this.get('number1'));
      params.push(this.get('number2'));
      params.push(this.get('number3'));
      this.get('storingData').add(params);
      console.log(this.get('storingData.userNumbers'));

      var userInputToArray= this.get('storingData.userNumbers').toArray();
        for(var y = 0; y < computerGenerator.length; ++ y) {
          if (computerGenerator[y] === userInputToArray[y] && computerGenerator[y] != "99") {
            computerGenerator.splice(y,1,"99");
            userInputToArray.splice(y,1,"99");
            output.push("black");
          }
        }

        for(var y = 0; y < computerGenerator.length; ++ y) {
          if(userInputToArray.indexOf(computerGenerator[y])>-1 && computerGenerator[y] != "99") { // if it is in there

            userInputToArray.splice(userInputToArray.indexOf(computerGenerator[y]),1,"99");
            computerGenerator.splice(y,1,"99");
            output.push("white");
          }
        }

        console.log("userInputToArray : " + userInputToArray);
        console.log("computerGenerator : " + computerGenerator);
        console.log(output);

      }
    }
});
