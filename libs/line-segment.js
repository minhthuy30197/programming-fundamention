'use strict'
function createLineSegment(len, char) {
    return {
      lenght: len,
      char: char,
      print: function() {
        let count = 0;
        let result = '';
        while (count < this.lenght) {
          if (count != 0 && count != this.lenght-1)
            result += this.char;
          else result += '*';
          count++;
        }
        result += '<br>';
        return result;
      }
    }
}