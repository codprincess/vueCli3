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
                },
                {
                    path: '/message',
                    name: 'message',
                    component: () => import('./views/message/Message.vue')
                },
                {
                    path: '/me',
                    name: 'me',
                    component: () => import('./views/profile/Me.vue')
                },
                

            ]
        },
        {
            path: '/sign',
            name: 'sign',
            component: () => import('./views/sign.vue')
        },
        {
            path: '/tpsign',
            name: 'tpsign',
            component: () => import('./views/tpsign.vue')
        },
        {
            path: '/code',
            name: 'code',
            component: () => import('./views/code.vue')
        },
        {
            path: '/toast',
            name: 'toast',
            component: () => import('./components/toast/toast.vue')
        },
        {
            path: '/edit',
            name: 'edit',
            component: () => import('./views/profile/edit.vue')
        },
        {
            path: '/publish',
            name: 'publish',
            component: () => import('./views/publish/publish.vue')
        },
        {
            path: '/upload',
            name: 'upload',
            component: () => import('./views/publish/upload.vue')
        },
    ]
})

export default router