import Ember from 'ember';

export default Ember.Component.extend({
  storingData: Ember.inject.service(),
  actions: {
    guess() {
      var computerGenerator=["1","2","3","4"];
      var params = [];
      var output = [];
      // var counterCorrectGuess = 0;
      params.push(this.get('number0'));
      params.push(this.get('number1'));
      params.push(this.get('number2'));
      params.push(this.get('number3'));
      this.get('storingData').add(params);
      console.log(this.get('storingData.userNumbers'));

      var userInputToArray= this.get('storingData.userNumbers').toArray();

        for(var y =0; y < computerGenerator.length; ++y){
          if (computerGenerator[y] === userInputToArray[y]) {
            console.log("this is correct");
          } else if (computerGenerator[y] !== userInputToArray[y] && userInputToArray.indexOf(computerGenerator[y])> -1){ // contained
              console.log("this is white");
            // counterCorrectGuess += counterCorrectGuess;
          } else if(computerGenerator[y] !== userInputToArray[y] && userInputToArray.indexOf(computerGenerator[y]) === -1){ // not contained
            console.log("this is NOT correct");
          }
          // if(userInputToArray.indexOf(computerGenerator[y])> -1 ){
          // console.log('number 0 exists in the array')
          // break;
        }
      }

    }
  // }
});
