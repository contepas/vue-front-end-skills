<template>
    <div id="app">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from "@/views/Header.vue"

export default {
    name: "home",
    components: {
        Header
    }
}
</script>

<style lang="scss">
body {
    max-width: 80%;
    margin: 10px auto;
}
</style>
