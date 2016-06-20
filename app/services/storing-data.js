import Ember from 'ember';

export default Ember.Service.extend({
  userNumbers: [],

  add(userNumberArray) {
    this.set('userNumbers',userNumberArray);
  }
});
