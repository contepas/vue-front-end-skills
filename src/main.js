import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/store"
//Add automatic generator Global Components
import upperFirst from "lodash/upperFirst"
import camelCase from "lodash/camelCase"
import "nprogress/nprogress.css"

const requireComponent = require.context(
    "./components/Global",
    false,
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)

    const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
    )

    Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
