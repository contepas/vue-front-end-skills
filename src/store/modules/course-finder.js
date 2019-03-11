import CourseService from "@/services/CourseService.js"

export const namespaced = true

export const state = {
    matchCourses: [],
    courses: [],
    keywords: []
}

export const mutations = {
    ADDALLCOURSES(state, courses) {
        state.courses = courses
    },
    ADDALLKEYWORDS(state, keywords) {
        state.keywords = keywords
    },
    ADDMATCHCOURSES(state, matchCourses) {
        state.matchCourses = matchCourses
    }
}

export const actions = {
    async fetchCourses({ commit, dispatch }) {
        try {
            const courses = await CourseService.getCourses()
            commit("ADDALLCOURSES", courses.data)
            const keywords = await CourseService.getKeywords()
            commit("ADDALLKEYWORDS", keywords.data)
        } catch (error) {
            const notification = {
                type: "error",
                message:
                    "There was an error fetching the courses api: " +
                    error.message
            }
            dispatch("notification/add", notification, {
                root: true
            })
        }
    },
    matchCourses({ state, commit, dispatch, getters }, search) {
        const matchCourses = []

        if (!search) {
            const notification = {
                type: "error",
                message: "Look like you forgot to tell me what to search"
            }
            dispatch("notification/add", notification, {
                root: true
            })
        } else if (!state.keywords.includes(search.toLowerCase())) {
            const notification = {
                type: "error",
                message: `I could't find any match with "${search}"`
            }
            dispatch("notification/add", notification, {
                root: true
            })
        } else {
            for (let course of state.courses) {
                if (course.keys.includes(search.toLowerCase())) {
                    matchCourses.push(course)
                }
            }
            commit("ADDMATCHCOURSES", matchCourses)
            const notification = {
                type: "success",
                message: "you got " + getters.totMatches + " courses."
            }
            dispatch("notification/add", notification, {
                root: true
            })
        }
    }
}

export const getters = {
    totMatches: state => {
        return state.matchCourses.length
    }
}
