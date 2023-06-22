<template>
    <div>
        <h2 class="title">Meine Übungen</h2>
    <div class="card">
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Muskel</th>
                <th scope="col">Kategorie</th>
                <th scope="col">Gewicht</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="exercise in exercises" :key="exercise.id">
                <td>{{ exercise.name }}</td>
                <td>{{ exercise.muscleGroup }}</td>
                <td>{{ exercise.category }}</td>
                <td>{{ exercise.weight }}</td>
            </tr>
            </tbody>
        </table>
    </div>
    </div>

</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: `Exercises`,
    data() {
        return {
            exercises: []
        }
    },
    mounted() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch('http://localhost:8080/api/exercises', requestOptions)
            .then(response => response.json())
            .then(result => {
                this.exercises = result;
            })
            .catch(error => console.log('error', error));
    }
}
</script>
<style>
.card {
    margin-top: 0.5cm;
    margin-left: 0.5cm;
    margin-right: 0.5cm;
}

.title {
    text-align: left;
    margin-top: 1cm;
    margin-left: 0.5cm;
    color: white;
}

body
{
    background: radial-gradient(circle at 50% 50%, #5de0e6, #004aad);

}

</style>
