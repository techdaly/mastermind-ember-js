import Ember from 'ember';

export default Ember.Service.extend({
  userNumbers: [],

  add(userNumberArray) {
    this.set('userNumbers',userNumberArray);
    console.log(this.get('userNumbers'));
  },

  // checkResult: Ember.computed('userNumbers.[]', function(){
  //   if(this.get('userNumbers').indexOf('1')=== -1 ){
  //     console.log('number 1 is not exist in the array')
  //   }
  //   debugger;
  //   return "number 1 is not exist in the array";
  // })
});
