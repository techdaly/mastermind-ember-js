import Ember from 'ember';

export default Ember.Component.extend({
  storingData: Ember.inject.service(),
  genNumber: Ember.inject.service(),
  countDown: Ember.inject.service(),
  storeParams: Ember.inject.service(),

  userGuess: 10,

  actions: {
    guess() {
      this.get('countDown').countDownGuess();

      var randomArray = this.get('genNumber').get('randomArray');
      var computerGenerator = randomArray.slice();

      var params = this.get('storeParams').get('serviceParams');
      var output = [];

      this.get('storingData').add(params);

      this.get('storeParams').emptyServiceArray();

      var userInputToArray= this.get('storingData.userNumbers').toArray();


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

      this.get('storingData').addUserGuess(this.get('storingData.userNumbers'));
      this.get('storingData').addPeg(output);

      this.sendAction('checkOutput', output);
    },

    selectRed0(value){
      this.get('storeParams').get('serviceParams').push(value);
    },

    selectYellow1(value){
      this.get('storeParams').get('serviceParams').push(value);
    },

    selectBlue2(value){
      this.get('storeParams').get('serviceParams').push(value);
    },

    selectGreen3(value){
      this.get('storeParams').get('serviceParams').push(value);
    }
  }
});
