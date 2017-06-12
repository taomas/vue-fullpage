1. function getName(){
  return this.name
}

2. Array.prototype.removeUser = function(user) {
  return this.filter(function (item) {
    if (item !== user) {
      return item
    }
  })
}

var users = ['张三', '李四', '王五']
users.removeUser('张三')

3. function setWork(event) {
  var user = {}
  if (this.work) {
    user.work = this.work
  } else {
    user.work = event
  }
  return user
}

setWork.prototype.work = 'java工程师'
var Jack = setWork('前端工程师')
var Tony = new setWork
console.log(Jack, Tony)