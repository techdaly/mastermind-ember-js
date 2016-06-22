import Ember from 'ember';

export default Ember.Component.extend({
  storingData: Ember.inject.service(),
  genNumber: Ember.inject.service(),
  countDown: Ember.inject.service(),

  userGuess: 10,

  actions: {
    guess() {
      this.get('countDown').countDownGuess();
      console.log(this.get('countDown').get('userGuess'));

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
    selectColor1(selection){
      if (selection) {
        this.set('number0', selection);
      }
    },
    selectColor2(selection){
      if (selection) {
        this.set('numbe1', selection);
      }
    },
    selectColor3(selection){
      if (selection) {
        this.set('number2', selection);
      }
    },
    selectColor4(selection){
      if (selection) {
        this.set('number3', selection);
      }
    }
  }
});
