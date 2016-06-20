import Ember from 'ember';

export default Ember.Route.extend({
  genNumber: Ember.inject.service(),

  actions: {
    makeNewArray(){
      this.get('genNumber').getArray();
      // console.log("before");
      console.log(this.get('genNumber').get('randomArray'));
      // console.log("after");
    }
  }
});
