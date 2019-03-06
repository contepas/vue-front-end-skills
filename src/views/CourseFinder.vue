<template>
    <div id="search">
        <h3 v-on:click="showSearch = !showSearch">{{ title }}</h3>
        <div id="search" v-show="showSearch">
            <CourseSearch
                @matchCourses="updateMatches"
                :courses="courses"
                :keywords="keywords"
                :function="updateMatches"
            />
            <CourseShow :matchCourses="matchCourses" />
        </div>
    </div>
</template>

<script>
import CourseSearch from "@/components/CourseFinder/CourseSearch.vue"
import CourseShow from "@/components/CourseFinder/CourseShow.vue"
import CourseService from "@/services/CourseService.js"

export default {
    data() {
        return {
            title: "Click me to show or hide the search field",
            showSearch: false,
            matchCourses: [],
            courses: [],
            keywords: []
        }
    },

    async created() {
        //axios call using promises
        CourseService.getCourses()
            .then(response => {
                this.courses = response.data
            })
            .catch(error => {
                console.log(`There was an error: ${error.response}`)
            })
        //axios call with async await
        try {
            const response = await CourseService.getKeywords()
            this.keywords = response.data
        } catch (error) {
            console.log(`There was an error: ${error.response}`)
        }
    },

    components: {
        CourseSearch,
        CourseShow
    },

    methods: {
        updateMatches(matchCourses) {
            this.matchCourses = matchCourses
        }
    }
}
</script>

<style lang="scss" scoped>
h3 {
    color: lightgray;
}
</style>
