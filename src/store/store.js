import Vue from "vue"
import Vuex from "vuex"
import * as notification from "@/store/modules/notification.js"
import * as courseFinder from "@/store/modules/course-finder.js"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        notification,
        courseFinder
    },
    state: {},
    mutations: {},
    actions: {}
})
