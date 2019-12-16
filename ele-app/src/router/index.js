import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '../views/index.vue'
// import Login from '../views/login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
   // name: 'home',
    //component: Index
    component:()=>import("../views/index"),
    children:[{
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'name',
      component:()=>import('../views/home')
    }
  ]
  },
  {
    path: '/login',
    name: 'login',
    //component: Login
    component:()=>import("../views/login")
  },
  // {
  //   // path: '/about',
  //   // name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

//路由守卫
// router.beforeEach((to,from,next)=>{
//   const isLogin = localStorage.ele_login ? true : false;
//   if(to.path == '/login'){
//     next();
//   }else{
//     //是否在登录状态下
//     isLogin ? next() :next('/login');
//   }
// })

export default router
