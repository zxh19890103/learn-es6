<template>
    <div>
        <h4>
        {{name}} needs Money.
        </h4>
        <div class="wrapper">
            <div class="content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'money',
        data() {
            return {
                name: 'Singhi'
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .wrapper {
        width: 800px;
        border: 1px solid #ddd;
        height: 400px;
    }
    .content {
        position: absolute;
        top: 50%;
        height: 240px;
        border: 1px solid #888;
        width: 100px;
        margin-top: -120px;
    }
    h4 {
        color: #321
    }
</style>