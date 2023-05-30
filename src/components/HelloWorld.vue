<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            default: 'Hello World'
        }
    }
}
</script>

<style scoped>
h1 {
    color: blue;
}
</style>
