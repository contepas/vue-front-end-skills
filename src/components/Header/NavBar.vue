<template>
    <div id="nav">
        <router-link :to="{ name: 'home' }" class="logo">
            <BaseIcon />
        </router-link>
        <nav>
            <router-link :to="{ name: 'course-finder' }">Courses</router-link>
            <router-link :to="{ name: 'coin-game' }">Coins</router-link>
        </nav>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
