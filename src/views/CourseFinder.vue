<template>
    <div id="search">
        <h3>Take a look at my courses</h3>

        <div id="search">
            <CourseSearch />
            <CourseShow />
        </div>
    </div>
</template>

<script>
import CourseSearch from "@/components/CourseFinder/CourseSearch.vue"
import CourseShow from "@/components/CourseFinder/CourseShow.vue"
// import { mapActions, mapState } from "vuex"

export default {
    // created() {
    //     this.fetchAndShow()
    // },

    // data() {
    //     return {
    //         title: "Loading...",
    //         showSearch: true
    //     }
    // },

    // computed: {
    //     ...mapState(["courseFinder"])
    // },

    // methods: {
    //     async fetchAndShow() {
    //         await this.fetchCourses()
    //         this.showSearch = true
    //         this.title = "Search trought my courses"
    //     },
    //     ...mapActions("courseFinder", ["fetchCourses"])
    // },

    components: {
        CourseSearch,
        CourseShow
    }
}
</script>

<style lang="scss" scoped>
h3 {
    color: lightgray;
}
</style>
