<script setup>
import Card from './Card.vue';
const props = defineProps({
 movies_result: null
})

</script>
<template>
    <section id="trendMovies" class="gallery">
      <Card :id_movie="id" :title="title" :release_date="release_date" :poster_path="poster_path" v-for="{ id, title, release_date, poster_path } in movies_result"/>
  
    </section>

</template>
    
 
<style>
    .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>

