// 引入axios
import axios from "axios";

// 引入进度条
import nProgress from "nprogress";
// 引入进度条样式
import 'nprogress/nprogress.css'
// 利用axios对象的方法create，去创建一个axios
// request就是axios，只不过改下配置
const requests=axios.create({
    // 配置对象
    // 基本路径，发送请求时
    baseURL:'http://gmall-h5-api.atguigu.cn/api',
    timeout:5000,
});
// 请求拦截器，发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    // config：配置对象，对象里面有个属性很重要，headers请求头

    // 进度条开始
    nProgress.start();
    return config;
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 进度条结束
    nProgress.done();
return res.data
},(error)=>{
    return Promise.reject(new Error('faile'))
})

// 对外暴露
export default requests