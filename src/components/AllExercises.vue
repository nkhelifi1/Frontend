<template>
    <div>
        <h2 class="title">Meine Übungen</h2>
        <input v-model="filterCrit" class="form-control rounded ml-2 w-25" placeholder="Search a Name...">
        <div class="card">
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
                <tr v-for="exercise in filterFunction(filterCrit)" :key="exercise.id">
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
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Exercises",
    data() {
        return {
            exercises: [],
            filterCrit: ''
        };
    },
    mounted() {
        this.fetchExercises();
    },
    methods: {
      filterFunction (criteria) {
        const result = []
        for (const exercise of this.exercises){
          if( criteria.length < 1 || exercise.name.toLowerCase().includes(criteria.toLowerCase())){
            result.push(exercise)
          }
        }
        return result
      },
        fetchExercises() {
          const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
          const endpoint = baseUrl + '/api/exercises'
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            fetch(endpoint, requestOptions)
                .then(response => response.json())
                .then(result => {
                    this.exercises = result;
                })
                .catch(error => console.log("error", error));
        },
        deleteExercise(exerciseId) {
          const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
          const endpoint = baseUrl + '/api/exercises/' + exerciseId
            const requestOptions = {
                method: "DELETE"
            };
            fetch(endpoint, requestOptions)
                .then(() => {
                    //entfernt die Übung aus der Zeile
                    this.exercises = this.exercises.filter(e => e.id !== exerciseId);
                })
                .catch(error => console.log("error", error));
        }
    }
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

body {
    background: radial-gradient(circle at 50% 50%, #5de0e6, #004aad);
}

th {
    padding-left: 0.2cm;
    padding-right: 0.2cm;
}

td {
    padding-left: 0.2cm;
    padding-right: 0.2cm;
}

.table {
    text-align: center;
}
.table-condensed th,
.table-condensed td {
    padding: 0.3cm;
    font-size: 1em;
}
.ml-2 {
    margin-left: 0.5cm !important;
}
</style>
