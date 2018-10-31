<template>
    <div>
        <i>{{message}}</i>
    </div>
</template>

<script>
    export default {
        name: 'err',
        data() {
            return {
                message: 'Error'
            }
        }
    }
</script>

<style scoped>
    i {
        color: #f00;
    }
</style>