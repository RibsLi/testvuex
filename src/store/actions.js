export default  {
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

}