<template>
    <div id="search-form">
        <form @submit.prevent="matchCourses">
            <label for="search"></label>
            <input
                v-model="search"
                type="text"
                id="search"
                placeholder="Ex. 'Javascript', 'js', 'Machine Learning'"
            />
            <BaseButton type="submit" value="submit">Search</BaseButton>
        </form>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    // props: {
    //     // example: {
    //     //     type: [Number, String],
    //     //     default: 50
    //     // }
    // },

    data() {
        return {
            search: "",
            showSearch: false
        }
    },

    computed: {
        ...mapState(["courseFinder"])
    },

    methods: {
        matchCourses() {
            this.$store.dispatch("courseFinder/matchCourses", this.search)
        }
    }
}
</script>

<style lang="scss" scoped>
h4 {
    color: lightblue;
}
</style>
