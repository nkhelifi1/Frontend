<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand text-blue" to="/">curl.</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Übungen
                        </router-link>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/api/exercises">Alle Übungen</router-link></li>
                            <li><router-link class="dropdown-item" to="/api/exercisesGroup">Muskelgruppen</router-link></li>
                            <li><router-link class="dropdown-item" to="/api/exercisesCategory">Push und Pull</router-link></li>
                        </ul>
                    </li>
                </ul>
                <div class="navbar-nav ml-auto">
                    <div class="nav-item">
                        <router-link class="btn btn-primary" style="background-color: #004aad;" to="/api/edit">Übungen hinzufügen</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navbar',
    data() {
        return {
            filterCrit: ''
        }
    },

    }
</script>

<style scoped>
.text-blue {
    color: #004aad;
}

</style>
