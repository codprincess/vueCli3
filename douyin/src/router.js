import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from './views/Home'
const router = new Router({
    routes:[
        {
            path:'/',
            redirect:'index'
        },
        {
            path:'/index',
            name:'home',
            component: Home,
            children:[
                {
                    path:'/',
                    name:'index',
                    component:()=>import('./views/index/Index.vue'),
                    children:[
                        {
                            path:'/',
                            name:'videolist',
                            component:()=>import('./components/index/videoList.vue')
                        },
                        {
                            path: '/someCity',
                            name: 'someCity',
                            component: () => import('./views/somecity/someCity.vue')
                        }
                    ]
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