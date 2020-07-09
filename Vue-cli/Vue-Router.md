# Vue-Router

## 实现原理

SPA(single page application):单一页面程序，只有一个完整的页面；在加载页面的时候，不会加载整个页面，而是只更新某个指定的容器中的内容。单页面应用(SPA)的核心之一是：**更新视图而不重新请求页面；**Vue-Router在实现单页面前端路由时，提供了两种方式：Hash模式和History模式。

## 解读router/index.js文件

```js
import Vue from 'vue' //引入vue
import VueRouter from 'vue-router' //引入vue-router
import Home from '../views/Home.vue'  //引入根目录下的Home.vue组件

Vue.use(VueRouter) // Vue全局使用Router

const routes = [ // 配置路由
  {             
    path: '/',  // 连接对象
    name: 'Home', // 路由名称
    component: Home // 对应组件模板
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

```



