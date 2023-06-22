<template>
  <form class="row gx-3 gy-2 align-items-center">
      <div class="col-sm-2">
          <label class="visually-hidden" for="specificSizeSelectGroup">Name</label>
          <select class="form-select" id="specificSizeSelectGroup" v-model="namen">
              <option selected disabled value="">Name der Übung</option>
              <option>Arnoldpress</option>
              <option>Bench Press</option>
              <option>Butterfly</option>
              <option>Chest Press</option>
              <option>Kurzhantel-Fly</option>
              <option>Military Press</option>
              <option>Push-Up</option>
              <option>Shoulder Press</option>
              <option>Trizeps Dip</option>
              <option>Trizepsdrücken am Kabelzug</option>
              <option>Bizeps Curls</option>
              <option>Face Pull</option>
              <option>Hammer Curl</option>
              <option>Kabelrudern</option>
              <option>Deadlifts</option>
              <option>Pull-Ups</option>
              <option>Pulldown</option>
              <option>Reverse Fly</option>
              <option>Dumbbell Rows</option>
              <option>Seitheben</option>
          </select>
      </div>
    <div class="col-sm-2">
      <label class="visually-hidden" for="specificSizeSelectGroup">Muskelgruppe</label>
      <select class="form-select" id="specificSizeSelectGroup" v-model="muscleGroup">
        <option selected disabled value="">Muskelgruppe</option>
        <option>Arme</option>
        <option>Brust</option>
        <option>Bauch</option>
        <option>Rücken</option>
        <option>Beine</option>
      </select>
    </div>
    <div class="col-sm-2">
      <label class="visually-hidden" for="specificSizeSelectKategorie">Kategorie</label>
      <select v-model="category" class="form-select" id="specificSizeSelectKategorie">
        <option selected disabled value="">Kategorie</option>
        <option>Push</option>
        <option>Pull</option>
      </select>
    </div>
      <div class="col-sm-2">
          <label class="visually-hidden" for="specificSizeSelectGewicht">Gewicht</label>
          <select v-model="weight" class="form-select" id="specificSizeSelectGewicht">
              <option selected disabled value="">Gewicht</option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
              <option>30</option>
              <option>35</option>
              <option>40</option>
              <option>45</option>
              <option>50</option>
              <option>55</option>
              <option>60</option>
              <option>65</option>
              <option>70</option>
              <option>75</option>
              <option>80</option>
              <option>85</option>
              <option>90</option>
              <option>95</option>
              <option>100</option>
          </select>
      </div>
      <div class="col-auto">
          <button type="button" class="btn btn-info text-white" @click="save()">Hinzufügen</button>
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
            category: '',
            weight: null
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
                weight: this.weight,
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