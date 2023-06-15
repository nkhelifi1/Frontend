<template>
  <div class="card">
    <div class="col" v-for="exercise in exercises" :key="exercise.id">
      <div class="card-body">
        <h5 class="card-title">{{ exercise.name }}</h5>
        <p class="card-text">Kategorie: {{ exercise.category}} Muskel: {{ exercise.muscleGroup }} Gewicht: {{ exercise.weight }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Exercises',
  data () {
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
        .then(result => result.forEach(exercise => {
          this.exercises.push(exercise)
        }))
        .catch(error => console.log('error', error));
  }
}

</script>