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
      <button type="submit" class="btn btn-primary" @click="save()">Hinzufügen</button>
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
    save () {
      const endpoint = 'http://localhost:8080/api/exercise'
      const data = {
        name: this.namen,
        muscleGroup: this.muscleGroup,
        weight: 0,
        category: this.category,
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Authorization: 'Bearer ' + this.accessToken
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data)
          })
          .catch(error => console.log('error', error))
    }
  },
  updated() {
    console.log("UPDATED!")
  }
}
</script>

<style>

</style>
