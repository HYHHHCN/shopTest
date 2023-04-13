// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
// 保存一下路由原型对象的push方法
let originPush=VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace;
// 重写push方法  第一个参数，告诉往哪边跳
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
// 配置路由
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                show:true
            }
        }, {
            path:'/register',
            component:Register,
            meta:{
                show:false
            }
        }, {
            path:'/login',
            component:Login,
            meta:{
                show:false
            }
        }, {
            path:'/search/:keyword',
            component:Search,
            meta:{
                show:true
            },
            name:'search'
        },
        // 重定向
        {
            path:'*',
            redirect:'/home'
        }
        
    ]
})