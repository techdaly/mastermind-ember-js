import Ember from 'ember';

export default Ember.Component.extend({
  genNumber: Ember.inject.service(),

  actions: {
    makeNewArray(){
      this.get('genNumber').getArray();
      var gameArray = this.get('genNumber').get('randomArray');
      console.log(gameArray);

      }
    }
});
