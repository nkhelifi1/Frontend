<template>
    <div class="home">
        <img alt="Curl Logo" class="logo" src="../assets/LogoCurl.svg">
        <ExerciseProWelcome />
    </div>
</template>

<script>
import ExerciseProWelcome from '@/components/ExerciseProWelcome.vue'

export default {
    name: 'HomeView',
    components: {
        ExerciseProWelcome
    }
}
</script>

<style>

body
{
    background: radial-gradient(circle at 50% 50%, #5de0e6, #004aad);
}

.logo {
    width: 30%;

}
</style>