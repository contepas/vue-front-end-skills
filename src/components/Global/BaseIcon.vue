<template>
    <div class="icon-wrapper">
        <svg class="icon" :width="width" :height="hight">
            <use v-bind="{ 'xlink:href': '/logo.svg' }"></use>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        width: {
            type: [Number, String],
            default: 50
        },
        hight: {
            type: [Number, String],
            default: 50
        }
    }
}
</script>

<style scoped></style>
