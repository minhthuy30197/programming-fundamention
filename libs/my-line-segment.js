'use strict'
function createLine(len) {
  return {
    length:len,
    print: function() {
      let rs = '';
      let tmp = this.length;
      while (tmp > 0) {
        rs += '*';
        tmp--;
      }
      rs += '<br>';
      return rs;
    }
  };
}
