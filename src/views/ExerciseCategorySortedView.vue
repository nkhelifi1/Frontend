<template>
  <div class="home">
    <AllExercisesByCategory/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllExercisesByCategory from '@/components/AllExercisesByCategory.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'ExercisesByCategory',
  components: {
    AllExercisesByCategory
  }
}
</script>