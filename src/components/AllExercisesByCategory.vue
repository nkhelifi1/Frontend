<template>
  <div>
    <h2 class="title">Push & Pull Sortierung</h2>
    <div class="card">
      <h3 class="table-title"><strong style="color: #004aad;">Pull Übungen</strong></h3>
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
        <tr v-for="exercise in filterFunction('pull')" :key="exercise.id">
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
    <div class="card">
        <h3 class="table-title" ><strong style="color: #004aad;">Push Übungen</strong></h3>
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
        <tr v-for="exercise in filterFunction('push')" :key="exercise.id">
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
    };
  },
  mounted() {
    this.fetchExercises();
  },
  methods: {
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
    },
    filterFunction (criteria){
      const result = []
      for (const exercise of this.exercises){
        if(exercise.category.toLowerCase().includes(criteria.toLowerCase())){
          result.push(exercise)
        }
      }
      return result
    }
  }
};
</script>

<style>
.card {
  text-align: left;
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
</style>
