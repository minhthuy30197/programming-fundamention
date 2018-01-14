'use strict'
function list() {
  return {
    length:0,
    push: function(obj) {
      this[this.length] = obj;
      this.length++;
    },
    pop: function() {
      this.length--;
      return this[this.length];
    }
  }
}