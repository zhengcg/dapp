import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import * as types from '@/store/types'
import Home from '@/components/Home'
import SourceList from '@/components/sourceList'
import MyAssets from '@/components/MyAssets'
import Wallet from '@/components/Wallet'
import Source from '@/components/Source'
import Invitation from '@/components/Invitation'
Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/sourceList',
      name: 'sourceList',
      component: SourceList
    },
    {
      path:'/myAssets',
      name:'myAssets',
      component:MyAssets
    },
     {
      path:'/wallet',
      name:'wallet',
      component:Wallet
    },
    {
      path:'/source',
      name:'source',
      component:Source
    },
    {
      path:'/invitation',
      name:'invitation',
      component:Invitation
    },
    {
        path:'/',
        redirect:'/home'
    }
  ]
})

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
}


router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})


export default router;