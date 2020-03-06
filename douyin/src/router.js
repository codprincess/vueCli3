import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from './views/Home'
const router = new Router({
    routes:[
        {
            path:'/',
            redirect:'home'
        },
        {
            path:'/home',
            name:'home',
            component: Home,
            children:[
                {
                    path:'/',
                    name:'index',
                    component:()=>import('./views/index/Index.vue')
                },
                {
                    path:'/follow',
                    name:'follow',
                    component:()=>import('./views/follow/Follow.vue')
                }
            ]
        }
    ]
})

export default router