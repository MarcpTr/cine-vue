<script setup>
import { ref, watchEffect, getCurrentInstance } from 'vue'
import TrendSelector from '../components/TrendSelector.vue'
import Gallery from '../components/Gallery.vue'
import Pagination from '../components/Pagination.vue'

const app = getCurrentInstance()
const api_key = app.appContext.config.globalProperties.$api_key
const language = app.appContext.config.globalProperties.$language
const type_media = app.appContext.config.globalProperties.$type_media;

const movies = ref(null);
const time_window = ref("day");
const API_URL = `https://api.themoviedb.org/3/trending/`;

const actualPage = ref(1);
const totalPages = ref(0);
const maxPage= ref(10);


watchEffect(async () => {
    getData();
});
const changePage = (value) => {
    actualPage.value = value;
    getData();
};
async function getData  () {
    const url = `${API_URL}${type_media}/${time_window.value}?language=${language}&api_key=${api_key}&page=${actualPage.value}`;
    movies.value = await (await (await fetch(url)).json());
    totalPages.value = movies.value.total_pages;
    movies.value = movies.value.results;

};
</script>
<template>
    <Pagination @page="changePage" :totalItems="Math.min(maxPage, totalPages)" :currentPage="actualPage" />
    <TrendSelector @time_window="(time) => time_window = time" />
    <Gallery :movies_result="movies" />
    <Pagination @page="changePage" :totalItems="Math.min(maxPage, totalPages)" :currentPage="actualPage" />
</template>
