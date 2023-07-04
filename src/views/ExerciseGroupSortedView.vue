<template>
  <div class="home">
    <AllExercisesByGroup/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllExercisesByGroup from '@/components/AllExercisesByGroup.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'ExercisesByGroup',
  components: {
    AllExercisesByGroup
  }
}
</script>