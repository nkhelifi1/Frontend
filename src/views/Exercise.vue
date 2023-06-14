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
      exercises: [
        {
          id: 1,
          name: 'Row',
          muscleGroup: 'back',
          weight: 55.0,
          category: 'pull'
        },
        {
          id: 2,
          name: 'Bench press',
          muscleGroup: 'chest',
          weight: 45.0,
          category: 'push'
        }
      ]
    }
  }
}
</script>