import Ember from 'ember';

export default Ember.Component.extend({

  isBoardShowing: false,

  actions: {
    checkOutput(output){
      this.sendAction('checkOutput', output);
    },

    showBoard(){
      this.set('isBoardShowing', true);
    }
  }
});
