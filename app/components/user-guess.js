import Ember from 'ember';

export default Ember.Component.extend({
  storingData: Ember.inject.service(),
  actions: {
    guess() {

      var params = [];
      params.push(this.get('number0'));
      params.push(this.get('number1'));
      params.push(this.get('number2'));
      params.push(this.get('number3'));
      this.get('storingData').add(params);

    }
  }
});
