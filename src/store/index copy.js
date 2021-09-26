import Vue from 'vue'
import Vuex from 'vuex'

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
  mutations: {
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
      //实际数据里面已经有address属性了但是界面没有显示
      // state.info['address'] = '洛杉矶' 
      //删除某个数据不具有响应式
      // delete state.info.age

      //下面这种方法就可以增加响应式
      // Vue.set(state.info, 'address', '洛杉矶')
      //删除某个数据具有响应式的方式
      // Vue.delete(state.info, 'age')
    }
  },
//处理异步操作
  actions: {
    //默认也有一个context(上下文)参数，可以暂时理解为Store
    // aUpdataInfo(context) {
    //   setTimeout(() => {
    //     context.commit('updataInfo')
    //   }, 1000);
    // }

    //携带payload参数
    // aUpdataInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updataInfo')
    //     console.log(payload);
    //   }, 1000);
    // }

    //payload可以是一个对象，此方法不好
    // aUpdataInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updataInfo')
    //     console.log(payload.msg);
    //     payload.success()
    //   }, 1000);
    // }

    //采用结合promise的方法
    aUpdataInfo(context,payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updataInfo')
          console.log(payload);
          resolve('111')
        }, 1000);
      })
    }

  },
//getters相当于computed计算属性，在需要对state里面的数据做一些处理时使用。
  getters: {
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
  },


  //模块的意思，因为有很多状态都交给vuex管理这时store就会很臃肿，为了解决这个问题我们就可以把store分割成模块，而每个模块也有自己的state、mutations、actions、getters
  modules: {
    // 也可以写成a: moduleA，在别的地方const moduleA = {state:{},}
    a: {
      state: {},
      mutations: {},
      actions: {},
      getters: {}
    },
    b: {
      state: {},
      mutations: {},
      actions: {},
      getters: {}
    }
    
  }
})

export default store

// 相当于
// Vue.prototype.$store = store