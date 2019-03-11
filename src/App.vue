<template>
    <div id="app">
        <Header />
        <NotificationContainer />
        <router-view />
    </div>
</template>

<script>
import Header from "@/views/Header.vue"
import NotificationContainer from "@/components/Global/NotificationContainer.vue"

export default {
    name: "home",
    components: {
        Header,
        NotificationContainer
    }
}
</script>

<style lang="scss">
body {
    max-width: 80%;
    margin: 10px auto;
}
</style>
