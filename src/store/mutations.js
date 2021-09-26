export default {
  //increment就是事件类型，传入的state是本身就默认传入的当前store里面的state所以这里不需要this
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  //mutation提交方式二，此时count不在是一个变量而是一个对象要更改
  // incrementCount(state, count) {
  //   state.counter += count
  // }
  incrementCount (state, payload) {
    state.counter += payload.count
  },
  addStu(state, stu) {
    state.students.push(stu)
  },
  //数据响应式原理：只有原先就存在state里面的数据才具有响应式
  updataInfo(state) {
    state.info.name = 'why'

    //新加入的数据没有响应式
    //实际数据里面已经有address属性了但是界面没有
    // state.info['address'] = '洛杉矶' 
    //删除某个数据不具有响应式
    // delete state.info.age

    //下面这种方法就可以增加响应式
    // Vue.set(state.info, 'address', '洛杉矶')
    //删除某个数据具有响应式的方式
    // Vue.delete(state.info, 'age')
  }
}