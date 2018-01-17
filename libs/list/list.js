let List = function () {
  this.length = 0
  this.push = function (obj) {
    this[this.length] = obj
    this.length++
  }
  this.pop = function () {
    this.length--
    let tmp = this[this.length]
    this[this.length] = undefined
    return tmp
  }
}