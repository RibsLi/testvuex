<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="subtraction">-</button>
    <button @click="addition">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addStudent">增加学生</button>

    <h2>{{$store.state.info}}</h2>
    <button @click="updataInfo">修改信息</button>

    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stu.length}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(11)}}</h2>

    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      
    }
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      //mutation更新数据时可能需要传递一些额外的参数count、stu，这些参数称为是mutation是载荷payload

      //mutation提交风格一
      // this.$store.commit('incrementCount', count)
      
      //mutation提交风格二：将提交的东西全部放到一个对象里面，设置提交的类型increment和对应的参数count
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStudent() {
      const stu = {id: 5, name: 'e', age: 23}
      this.$store.commit('addStu', stu)
    },
    updataInfo() {
      // this.$store.commit('updataInfo')

      //为了模拟异步操作需要修改
      // this.$store.dispatch('aUpdataInfo')

      //也可以携带payload参数
      // this.$store.dispatch('aUpdataInfo', '我是payload')

      //payload可以是一个对象，次方法不好
      // this.$store.dispatch('aUpdataInfo', {
      //   msg: '携带的信息',
      //   success: () => {
      //     console.log('里面已经完成');
      //   }
      // })

      //采用结合promise的方法
      this.$store.dispatch('aUpdataInfo', '我是payload').then(res => {
        console.log(res);
        console.log('里面已经完成');
      })

    }
  }
}
</script>

<style>

</style>