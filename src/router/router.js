//配置所有的路由相关信息
// 1.导入路由
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入对应的路由
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
import Product from '../pages/product.vue'
import Detail from '../pages/detail.vue'
import Cart from '../pages/cart.vue'
import Order from '../pages/older.vue'
import OrderConfirm from '../pages/orderConfirm.vue'
import OrderList from '../pages/orderList.vue'
import OrderPay from '../pages/orderPay.vue'
import AilPay from '../pages/aliPay.vue'

// 2. 使用路由 
// 2.1 通过Vue.use(插件),来安装这个插件
Vue.use(VueRouter);

// 2.2 创建路由Router对象
export default new VueRouter({
  // 配置路由和组件之间的映射关系
  routes: [
    {
      // 首页和产品栈以及商品详情共用一个大的副路由，因此使用路由的嵌套
      path: '/',
      name: 'home',
      component: Home, // home组件里面是嵌套视图，
      redirect: '/index',
      children: [
        {
          // 首页路由
          path: '/index',
          name: 'index',
          component: Index,
        }, {
          // 产品栈路由
          path: '/product/:id', // 需要接受参数使用动态路由
          name: 'product',
          component: Product,
        }, {
          // 商品详情路由
          path: '/detail/:id',
          name: 'detail',
          component: Detail,
        }
      ]
    },
    {
      // 购物车路由
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      // 订单路由
      path: '/order',
      name: 'order',
      component: Order,
      children:[
        {
          // 订单列表路由
          path: 'list',
          name: 'order-list',
          component: OrderList,
        },
        {
          // 订单支付路由
          path: 'confirm',
          name: 'order-confirm',
          component: OrderConfirm,
        },
        {
          // 订单确认路由
          path: 'pay',
          name: 'order-pay',
          component: OrderPay,
        },
        {
           // 订单确认路由
           path: 'alipay',
           name: 'alipay',
           component: AilPay,
        }
      ]
    }
  ],
  mode: 'history'
})
// 将router对象传入到实例中:导出,并且在main.js里面挂载该路由
