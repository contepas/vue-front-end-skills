<template>
    <div v-show="matchCourses.length > 0" id="courses">
        <ul>
            <li v-for="(course, index) in matchCourses" :key="index">
                {{ course.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        matchCourses: Array
    }
}
</script>

<style lang="scss" scoped></style>
