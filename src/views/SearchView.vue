<script setup>
import { getCurrentInstance, ref } from 'vue'
import SearchSelector from '../components/SearchSelector.vue'
import Pagination from '../components/Pagination.vue'
import Gallery from '../components/Gallery.vue';

const app = getCurrentInstance()
const api_key = app.appContext.config.globalProperties.$api_key
const language = app.appContext.config.globalProperties.$language
const include_adult = app.appContext.config.globalProperties.$include_adult;
const type_media = app.appContext.config.globalProperties.$type_media;

const movies = ref(null);
const actualSearch = ref("");

const actualPage = ref(1);
const totalPages = ref(0);
const maxPage= ref(10);


function buscar(search){
    if(search!=""){
        actualPage.value=1;
    getData(search);
    }
   
}
async function getData(search = actualSearch.value) {
    actualSearch.value=search;
 
    const API_URL = `https://api.themoviedb.org/3/search/${type_media}?include_adult=${include_adult}&query=${search}&language=${language}&api_key=${api_key}&page=`;
    movies.value = await (await (await fetch(API_URL + actualPage.value)).json());
    if(movies.value.results.length==0)
    {
        alert("No se encontraron peliculas");
        movies.value=null;
    }else{
    totalPages.value = movies.value.total_pages;
    movies.value = movies.value.results;
    }
}
const changePage = (value) => {
    actualPage.value = value;
    getData();
}
</script>
<template>

    <SearchSelector @search="buscar" />
    <Pagination @page="changePage" :totalItems="Math.min(maxPage, totalPages)" :currentPage="actualPage" />
    <Gallery :movies_result="movies" />
    <Pagination @page="changePage" :totalItems="Math.min(maxPage, totalPages)" :currentPage="actualPage" />

</template>
  
  <style>
  </style>
  