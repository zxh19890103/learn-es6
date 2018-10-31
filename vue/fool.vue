<template>
    <div>
        <h4>
        {{name}} is a Foo.
        </h4>
        <div class="wrapper">
            <div class="floater">
                <div class="content"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'fool',
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
    .floater {
        float: left;
        height: 50%;
        margin-bottom: -120px;
    }
    .content {
        clear: both;
        height: 240px;
        border: 1px solid #444;
        width: 100px;
        position: relative;
    }
    h4 {
        color: #321
    }
</style>