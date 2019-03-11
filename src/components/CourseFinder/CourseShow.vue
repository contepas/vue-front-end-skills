<template>
    <div v-show="totMatches > 0" id="courses">
        <ul>
            <li v-for="(course, index) in matchCourses" :key="index">
                {{ course.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
    computed: {
        ...mapState({
            matchCourses: state => state.courseFinder.matchCourses
        }),
        ...mapGetters("courseFinder", ["totMatches"])
    }
}
</script>

<style lang="scss" scoped></style>
