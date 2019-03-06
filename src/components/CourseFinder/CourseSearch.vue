<template>
    <div>
        <h4>Search trought my courses</h4>
        <div id="search-form">
            <label for="search">
                <input
                    v-on:keypress.enter="showCourses"
                    v-model="search"
                    type="text"
                    id="search"
                    placeholder="Ex. 'Javascript', 'js', 'Machine Learning'"
                />
            </label>
            <BaseButton v-on:click="showCourses">Search</BaseButton>
            <span v-show="error" class="error">{{ errorMessage }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        courses: Array,
        keywords: Array,
        updateMatches: Function
        // example: {
        //     type: [Number, String],
        //     default: 50
        // }
    },
    data() {
        return {
            search: "",
            showSearch: false,
            error: false,
            errorMessage: ""
        }
    },
    methods: {
        showCourses: function() {
            const matchCourses = []

            if (!this.search) {
                this.errorMessage =
                    "Look like you forgot to tell me what to search"
                this.error = true
            } else if (!this.keywords.includes(this.search.toLowerCase())) {
                // eslint-disable-next-line
                this.errorMessage = `I could't find any match with "${
                    this.search
                }"`
                this.error = true
            } else {
                this.error = false

                for (let course of this.courses) {
                    if (course.keys.includes(this.search.toLowerCase())) {
                        matchCourses.push(course)
                    }
                }
            }

            this.search = ""
            this.$emit("matchCourses", matchCourses)
        }
    }
}
</script>

<style lang="scss" scoped>
h4 {
    color: lightblue;
}
</style>
