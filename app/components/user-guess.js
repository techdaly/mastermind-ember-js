import Ember from 'ember';

export default Ember.Component.extend({
  storingData: Ember.inject.service(),
  actions: {
    guess() {
      var computerGenerator=["1","1","1","1"];
      var params = [];
      var output = [];
      params.push(this.get('number0'));
      params.push(this.get('number1'));
      params.push(this.get('number2'));
      params.push(this.get('number3'));
      this.get('storingData').add(params);
      console.log(this.get('storingData.userNumbers'));

      var userInputToArray= this.get('storingData.userNumbers').toArray();

        for(var y =0; y < computerGenerator.length; y++){


          debugger;
        if(userInputToArray.indexOf(computerGenerator[y])> -1 ){
          console.log('number 0 exists in the array')
          break;
        }
      }

    }
  }
});
