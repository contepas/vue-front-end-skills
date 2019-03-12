import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import CourseFinder from "./views/CourseFinder.vue"
import CoinGame from "./views/CoinGame.vue"
import NotFound from "./views/NotFound.vue"
import NProgress from "nprogress"
import store from "@/store/store"

Vue.use(Router)

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/courses",
            name: "course-finder",
            component: CourseFinder,
            beforeEnter(routeTo, routeFrom, next) {
                store.dispatch("courseFinder/fetchCourses").then(() => {
                    next()
                })
            }
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

router.beforeEach((routeTo, routeFrom, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router