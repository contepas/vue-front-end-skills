import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import CourseFinder from "./views/CourseFinder.vue"
import CoinGame from "./views/CoinGame.vue"
import NotFound from "./views/NotFound.vue"

Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/courses",
            name: "course-finder",
            component: CourseFinder
        },
        {
            path: "/coins",
            name: "coin-game",
            component: CoinGame
        },
        // {
        //     path: "/event-show",
        //     name: "EventShow",
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import(/* webpackChunkName: "about" */ "./views/EventShow.vue")
        // }
        {
            path: "*",
            component: NotFound
        }
    ]
})
