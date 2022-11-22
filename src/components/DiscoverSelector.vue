<script setup>
import { ref, onMounted } from 'vue'
const API_KEY = "b7048181b82a3678ad874fa00559a427";
const page = 1;
const sort_by_opt = ref({ "popularity.desc": "Mas populares", "popularity.asc": "Menos populares", "vote_average.desc": "Mejor votadas", "vote_average.asc": "Peor votadas", "primary_release_date.desc": "Mas recientemente", "primary_release_date.asc": "Mas antiguas", "title.asc": "Título (A-Z)", "title.desc": "Título (Z-A)" }
);
const selected_by_opt = ref('popularity.desc')
const selected_include_video = ref(true);
const release_date_1 = ref(undefined);
const release_date_2 = ref(undefined);
const language = ref("es-ES");
const release_date_gte = "&primary_release_date.gte=";
const release_date_lte = "&primary_release_date.lte=";
let release_date_gte_query = "";
let release_date_lte_query = "";

const emit = defineEmits();

const url = ref(undefined);
const buscar = () => {

    if (release_date_1.value != undefined && release_date_2.value != undefined) {

        console.log(release_date_1.value + "  " + release_date_2.value)
        if (release_date_1.value < release_date_2.value) {

            release_date_gte_query = release_date_gte + release_date_1.value;
            release_date_lte_query = release_date_lte + release_date_2.value;
        } else {

            release_date_gte_query = release_date_gte + release_date_2.value;
            release_date_lte_query = release_date_lte + release_date_1.value;
        }
    }
    url.value = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${language.value}&sort_by=${selected_by_opt.value}&include_video=${selected_include_video.value}${release_date_gte_query}${release_date_lte_query}&page=`;

    emit('url', url.value);

}
onMounted(() => {
    buscar();
})
</script>

<template>
    <select v-model="selected_by_opt">
        <option v-for="(value, key) in sort_by_opt" :value="key"> {{ value }} </option>
    </select>
    <input type="date" v-model="release_date_1">
    <input type="date" v-model="release_date_2">
    <label><input type="checkbox" v-model="selected_include_video"> Con video</label><br>
    <button @click="buscar()">Buscar</button>
</template>

<style>
</style>