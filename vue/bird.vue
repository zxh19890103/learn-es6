<template>
    <div>
        <h4>Here is a bird standing on the tree.</h4>
        <p>His name is {{name}}</p>
        <button type="button" v-on:click="say()">He can say word pepole can say.</button>
    </div>
</template>

<script>
    export default {
        name: 'bird',
        data() {
            return {
                name: 'Singhi'
            }
        },
        methods: {
            say() {
                alert('I am Singhi')
                this.$store.dispatch('changeAppName', {})
            }
        }
    }
</script>

<style>
    h4 {
        color: #874
    }
</style>