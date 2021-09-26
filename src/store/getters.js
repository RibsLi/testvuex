export default {
  powerCounter(state) {
    return state.counter * state.counter
  },
  more20stu(state) {
    return state.students.filter(n => n.age > 20)
  },
  //此处的getters就是当前store里面的getters
  more20stuLength(state, getters) {
    return getters.more20stu.length
  },
  // moreAgeStu(state) {
  //   return function(age) {
  //     return state.students.filter(n => n.age > age)
  //   }
    
  // }
  moreAgeStu: state => {
    return age => {
      return state.students.filter(n => n.age > age)
    }
  }
}