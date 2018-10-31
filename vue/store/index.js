import Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        appName: 'GetVueWithinTwoDays',
    },
    actions: {
        changeAppName(context, payload) {
            context.commit('changeAppName', payload)
        }
    },
    mutations: {
        changeAppName(state, payload) {
            state.appName = 'GetVueWithinTwoDays? Can you?'
        }
    }
})

export default store