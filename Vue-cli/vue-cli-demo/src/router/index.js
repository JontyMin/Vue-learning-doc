import Vue from 'vue' //引入vue
import VueRouter from 'vue-router' //引入vue-router
import Home from '../views/Home.vue'  //引入根目录下的Home.vue组件
import Hello from '../views/Hello.vue'

import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'


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
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello,
    children:[
      {path:'/',component:Hello},
      {path:'hi1',component:Hi1},
      {path:'hi2',component:Hi2},
    ]

  }
]

const router = new VueRouter({
  routes
})

export default router
