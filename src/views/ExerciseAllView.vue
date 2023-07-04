<template>
  <div class="home">
    <AllExercises/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllExercises from '@/components/AllExercises.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Exercise',
  components: {
    AllExercises
  }
}
</script>