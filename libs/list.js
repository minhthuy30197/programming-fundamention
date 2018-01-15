'use strict'
function list () {
  return {
    length: 0,
    push: function(obj) {
      this[this.length] = obj
      this.length++
    },
    pop: function() {
      this.length--
      let tmp = this[this.length]
      this[this.length] = undefined
      return tmp
    },
    indexOf: function (obj) {
      let count = 0
      while (count < this.length) {
        if (this[count] === obj) return count
        count++
      }
      return -1
    },
    concat: function (array) {
      let tmp = list()
      let count = 0
      while (count < this.length) {
        tmp.push(this[count])
        count++
      }
      count = 0
      while (count < array.length) {
        tmp.push(array[count])
        count++
      }
      return tmp
    },
    shift: function () {
      let tmp = this[0]
      this.length--
      let count = 0
      while (count < this.length) {
        this[count] = this[count+1]
        count++
      }
      return tmp
    }
  }
}