import Vue from 'vue'
import VueRouter from 'vue-router'

import BirdComponent from './bird.vue'
import FoolComponent from './fool.vue'
import MoneyComponent from './money.vue'
import ErrComponent from './err.vue'
const LazyComponentRequest = () => import(/* webpackChunkName: "lazy" */ './lazy.vue')

Vue.use(VueRouter)

const routes = [
    { name: 'bird', path: '/bird', component: BirdComponent },
    { name: 'foo',  path: '/foo', component: FoolComponent },
    { name: 'money',  path: '/money', component: MoneyComponent },
    { name: 'lazy',  path: '/lazy', component: LazyComponentRequest },
    { name: 'err',  path: '/err', component: ErrComponent }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.onError(function(err) {
    console.log(err)
    router.replace('/err')
})

router.beforeEach((to, from, next) => {
    // if (to.name === 'err') {
    //     next(true)
    // } else {
    //     next(new Error('Hey'))
    // }
    // setTimeout(() => {
    //     next(true)
    // }, 3000)
    next(true)
})

export default router