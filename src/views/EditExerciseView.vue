<template>
    <div class="home">
        <h2 class="title">Übungen hinzufügen</h2>
        <InputForm/>
    </div>

</template>

<script>
import InputForm from "@/components/InputForm.vue";

export default {
    name: 'EditExerciseView',
    components: {
        InputForm
    }
}
</script>

<style scoped>
.title {
    text-align: left;
    margin-top: 2cm;
    color: white;

}

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 1cm;
    margin-left: 0.5cm;
}

.button-lg {
    padding: 0.5cm;
    margin-left: 1cm;
}

.home {
    margin: 1cm;
}
body
{
    background: radial-gradient(circle at 50% 50%, #5de0e6, #004aad);
}

</style>
