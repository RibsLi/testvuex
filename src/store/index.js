import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const store = new Vuex.Store({
  //vuex.store里面固定存放state, mutations,getters,actions,modules
  //state单一状态树。
  state: {
    counter: 100,
    students: [
      {id:1, name: 'a', age: 18},
      {id:2, name: 'b', age: 22},
      {id:3, name: 'c', age: 11},
      {id:4, name: 'd', age: 33},
    ],
    info: {
      name: 'kobe',
      age: 18,
      height: 1.88
    }
  },

//state状态更新的唯一方式就是commit提交mutation，mutation主要包括字符串的事件类型（type），一个回调函数（handler），该函数的第一个参数就是state
  mutations,

//处理异步操作
  actions,

//getters相当于computed计算属性，在需要对state里面的数据做一些处理时使用。
  getters,

  //模块的意思，因为有很多状态都交给vuex管理这时store就会很臃肿，为了解决这个问题我们就可以把store分割成模块，而每个模块也有自己的state、mutations、actions、getters
  modules: {
    a: moduleA
  }
})

export default store

// 相当于
// Vue.prototype.$store = store