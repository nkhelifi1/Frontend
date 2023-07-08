<template>
    <div>
        <h2 class="title">Muskelgruppen</h2>
        <div class="card" v-for="(groupExercises, muscleGroup) in groupedExercises" :key="muscleGroup">
            <p class="muscle-group-title">{{ muscleGroup }}</p>
            <table class="table table-hover table-condensed">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Muskel</th>
                    <th scope="col">Kategorie</th>
                    <th scope="col">Gewicht</th>
                    <th scope="col">Übungen löschen</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="exercise in groupExercises" :key="exercise.id">
                    <td>{{ exercise.name }}</td>
                    <td>{{ exercise.muscleGroup }}</td>
                    <td>{{ exercise.category }}</td>
                    <td>{{ exercise.weight }}</td>
                    <td>
                        <button @click="deleteExercise(exercise.id)" class="btn btn-info text-white btn-sm">Löschen</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>



<script>
export default {
    name: 'AllExercisesByGroup',
    data() {
        return {
            exercises: [],
        };
    },
    computed: {
        groupedExercises() {
            const grouped = {};
            for (const exercise of this.exercises) {
                // eslint-disable-next-line no-prototype-builtins
                if (!grouped.hasOwnProperty(exercise.muscleGroup)) {
                    grouped[exercise.muscleGroup] = [];
                }
                grouped[exercise.muscleGroup].push(exercise);
            }
            return grouped;
        },
    },
    mounted() {
        this.fetchExercises();
    },
    methods: {
        fetchExercises() {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            fetch("http://localhost:8080/api/exercises", requestOptions)
                .then(response => response.json())
                .then(result => {
                    this.exercises = result;
                })
                .catch(error => console.log("error", error));
        },
        deleteExercise(exerciseId) {
            const requestOptions = {
                method: "DELETE"
            };
            fetch(`http://localhost:8080/api/exercises/${exerciseId}`, requestOptions)
                .then(() => {
                    this.exercises = this.exercises.filter(e => e.id !== exerciseId);
                })
                .catch(error => console.log("error", error));
        },
    },
};
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

.muscle-group-title {
    text-align: left;
    margin-left: 0.5em;
    font-weight: bold;
    color: #004aad;
    font-size: 1.7em;
}

body {
    background: radial-gradient(circle at 50% 50%, #5de0e6, #004aad);
}
.table {
    text-align: center;
}
th {
    padding-left: 0.2cm;
    padding-right: 0.2cm;
}

td {
    padding-left: 0.2cm;
    padding-right: 0.2cm;
}

.table-condensed th,
.table-condensed td {
    padding: 0.3cm;
    font-size: 1em;
}
</style>
