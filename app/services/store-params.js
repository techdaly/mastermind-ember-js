import Ember from 'ember';

export default Ember.Service.extend({
  serviceParams: [],

  emptyServiceArray(){
    this.set('serviceParams', []);
  }
});
