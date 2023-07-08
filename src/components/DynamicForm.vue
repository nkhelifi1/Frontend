<template>
    <div>
        <h3> {{ title }} </h3>
        <div>
            <input v-model="nameField" placeholder="Name" type="text" ref="nameInput">
            <input v-model="muscleGroupField" placeholder="Muscle Group" type="text">
            <input v-model="categoryField" placeholder="Category" type="text">
            <input v-model="weightField" placeholder="Weight" type="number" step="0.01">
            <button type="button" @click="save()">Save</button>
            <input v-model="filterCrit" placeholder="Filter criterion">
        </div>
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Muscle Group</th>
                    <th>Category</th>
                    <th>Weight</th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="items.length === 0">
                    <td colspan="4">No exercises found</td>
                </tr>
                <tr v-for="item in myFilterFunc(filterCrit)" :key="item.id">
                    <td>{{item.name}}</td>
                    <td>{{item.muscleGroup}}</td>
                    <td>{{item.category}}</td>
                    <td>{{item.weight}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DynamicForm',
    props: ['title'],
    data() {
        return {
            items: [],
            nameField: '',
            muscleGroupField: '',
            categoryField: '',
            weightField: '',
            filterCrit: ''
        }
    },
    methods: {
        myFilterFunc(crit) {
            return this.items.filter(
                it =>
                    crit.length < 1 ||
                    it.name.toLowerCase().includes(crit.toLowerCase()) ||
                    it.muscleGroup.toLowerCase().includes(crit.toLowerCase()) ||
                    it.category.toLowerCase().includes(crit.toLowerCase())
            );
        },
        loadExercises() {
            // API-Route aufrufen, um Übungen aus dem Backend zu laden
            fetch('/api/exercises')
                .then(response => response.json())
                .then(data => {
                    this.items = data;
                })
                .catch(error => console.log('Error:', error));
        },
        save() {
            //API-Route aufrufen, um eine neue Übung zu erstellen
            const data = {
                name: this.nameField,
                muscleGroup: this.muscleGroupField,
                category: this.categoryField,
                weight: parseFloat(this.weightField)
            };
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            fetch('/api/exercises', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log('Exercise added:', data);
                    this.nameField = '';
                    this.muscleGroupField = '';
                    this.categoryField = '';
                    this.weightField = '';
                })
                .catch(error => console.log('Error:', error));
        }
    },
    created() {
        this.loadExercises();
    }
};
</script>

<style scoped>
table {
    margin-left: auto;
    margin-right: auto;
}
button {
    color: #004aad;
}
</style>
