import Ember from 'ember';

export default Ember.Component.extend({
  storingData: Ember.inject.service(),

  // checkResult: Ember.computed("this.get('storingData').get('userNumbers')", function(){
  //   if(this.get('storingData').get('userNumbers').indexOf(1)=== -1 ){
  //     console.log('number 1 is not exist in the array')
  //   }
  // })

  

});
