import Vue from "vue";

import Vuex from "vuex"

// 引入小仓库
import home from './home'
import search from './search'
// 使用插件
Vue.use(Vuex);
// state是vuex用于存储数据的地方
// action是vuex用于处理部分逻辑及执行异步操作的地方
// mutations是处理state的唯一途径
// getters计算属性，用以简化数据使更便捷


// 对外暴露一个vuex实例
export default new Vuex.Store({
   modules:{
    home,
    search
   }
})