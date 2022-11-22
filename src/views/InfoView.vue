<script setup>
import { ref, onBeforeMount, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
import  PrimaryInfo  from '../components/PrimaryInfo.vue'
import  SecundaryInfo  from '../components/SecundaryInfo.vue'

const app = getCurrentInstance()
const api_key = app.appContext.config.globalProperties.$api_key
const language = app.appContext.config.globalProperties.$language

const route = useRoute()
const id = route.query.id;

const infoMovie = ref({});

const getData = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=${language}&append_to_response=videos,credits`;
    infoMovie.value = await (await (await fetch(url)).json());
    console.log(infoMovie.value);
};

onBeforeMount(() => {
    getData();
});
</script>
    
    <template>
    <main id="info">

       <PrimaryInfo :title="infoMovie.title" :backdrop_path="infoMovie.backdrop_path" :videos="infoMovie.videos" :overview="infoMovie.overview"/>
        <SecundaryInfo :title="infoMovie.title" :runtime="infoMovie.runtime" :original_language="infoMovie.original_language" :budget="infoMovie.budget" :genres="infoMovie.genres" :production_companies="infoMovie.production_companies" :credits="infoMovie.credits" :videos="infoMovie.videos"/>
    </main>
</template>
<style>
</style>