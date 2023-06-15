<template>
  <form class="row gx-3 gy-2 align-items-center">
    <div class="col-sm-3">
      <label class="visually-hidden" for="specificSizeInputName">Name</label>
      <input type="text" class="form-control" id="specificSizeInputName" placeholder="Name der Übung">
    </div>
    <div class="col-sm-3">
      <label class="visually-hidden" for="specificSizeSelect">Muskelgruppe</label>
      <select class="form-select" id="specificSizeSelect">
        <option selected>Muskelgruppe</option>
        <option value="1">Brust</option>
        <option value="2">Arme</option>
        <option value="3">Bauch</option>
        <option value="3">Rücken</option>
        <option value="3">Beine</option>
      </select>
    </div>
    <div class="col-sm-3">
      <label class="visually-hidden" for="specificSizeSelect">Kategorie</label>
      <select class="form-select" id="specificSizeSelect">
        <option selected>Kategorie</option>
        <option value="1">Push</option>
        <option value="2">Pull</option>
      </select>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">Hinzufügen</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'InputForm',
  data(){
    return {

    }
  }
}
</script>

<style>

</style>
