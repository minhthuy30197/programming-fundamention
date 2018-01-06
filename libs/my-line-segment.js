'use strict'
function createLine(len) {
  return {
    lenght:len,
    print: function() {
      let rs = '';
      let tmp = this.lenght;
      while (tmp > 0) {
        rs += '*';
        tmp--;
      }
      return rs;
    }
  };
}
