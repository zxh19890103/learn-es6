import Vue from 'vue'
import './style.css'
import router from './router'
import store from './store'

new Vue({
    router,
    store,
    el: '#app',
    template: `
    <div class="webApp">
        <h3>{{title}} - {{appname}}</h3>
        <router-link to="/bird">Go to Bird</router-link>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/money">Go to Money</router-link>
        <router-link to="/lazy">Go to Lazy</router-link>
        <router-view></router-view>
    </div>
    `,
    data: {
        title: 'Master Vue Series Within 2 Days'
    },
    computed: {
        appname() {
            return this.$store.state.appName
        }
    },
    methods: {
        sayHello() {
            console.log('sayHello')
        }
    }
})