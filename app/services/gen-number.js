import Ember from 'ember';

export default Ember.Service.extend({

  randomArray: [],

  getArray() {
    for ( var i=0; i<4; i++) {
      this.get('randomArray').push(Math.floor(Math.random() * 4));
    }
  }
});
