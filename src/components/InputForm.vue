<template>
  <form class="row gx-3 gy-2 align-items-center">
    <div class="col-sm-3">
      <label class="visually-hidden" for="specificSizeInputName">Name</label>
      <input v-model="namen" type="text" class="form-control" id="specificSizeInputName" placeholder="Name der Übung">
    </div>
    <div class="col-sm-3">
      <label class="visually-hidden" for="specificSizeSelectGroup">Muskelgruppe</label>
      <select class="form-select" id="specificSizeSelectGroup" v-model="muscleGroup">
        <option selected disabled value="">Muskelgruppe</option>
        <option>Brust</option>
        <option>Arme</option>
        <option>Bauch</option>
        <option>Rücken</option>
        <option>Beine</option>
      </select>
    </div>
    <div class="col-sm-3">
      <label class="visually-hidden" for="specificSizeSelectKategorie">Kategorie</label>
      <select v-model="category" class="form-select" id="specificSizeSelectKategorie">
        <option selected disabled value="">Kategorie</option>
        <option value="1">Push</option>
        <option value="2">Pull</option>
      </select>
    </div>
    <div class="col-auto">
      <button type="button" class="btn btn-primary" @click="save()">Primary</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'InputForm',
  data(){
    return {
      exercises: [],
      namen: '',
      muscleGroup: '',
      category: ''
    }
  },
  methods: {
    load(){
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
    },
    async save () {
      const data = {
        name: this.namen,
        muscleGroup: this.muscleGroup,
        category: this.category,
        weight: 0,
      }
      try {
        const response = await fetch('http://localhost:8080/api/exercises', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          console.log('Neue Übung wurde hinzugefügt!');
        } else {
          console.error('Fehler beim Hinzufügen der Übung!');
        }
      } catch (error) {
        console.error('Fehler:', error);
      }
    }
  },
  updated() {
    console.log("UPDATED!")
  }
}
</script>

<style>

</style>
