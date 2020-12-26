import Vue from 'vue'
import router from './router/router'
import axios from 'axios'
// 因为每个页面使用的时候都需要导入发生请求，vue-axios将作用域对象挂载到vue实例上，方便使用this调用。
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'

// mock开关
const mock =true;
if(mock){
  require('./mock/api')
}
// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'; 
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 接口错误拦截请求
axios.interceptors.response.use(function(response){
  // 获取接口返回的值
  let res = response.data;
  // 如果状态码是0，则代表返回成功
  if(res.data == 0){
    return res.data
  }else if(res.data == 10){ // 未登录,跳转到登录页面
    window.location.href = '/login'
  }else{// 错误的信息
    alert(res.msg);
  } 
});

// 注册挂载实例
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

