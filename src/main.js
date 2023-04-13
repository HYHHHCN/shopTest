import Vue from 'vue'

// 三级联动注册为全局组件
import TypeNav from '@/components/TypeNav'

import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入vuex
import store from '@/store'

// 测试接口
import {reqCategoryList} from './api' 

reqCategoryList()

Vue.config.productionTip = false
// 注册为全局组件，第一个参数为全局组件的名字，第二个组件为哪一个组件
Vue.component(TypeNav.name,TypeNav)


new Vue({
  render: h => h(App),
  // 注册路由
  router,
  store
}).$mount('#app')
