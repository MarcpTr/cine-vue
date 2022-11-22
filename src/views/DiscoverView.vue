<script setup>
import { ref } from 'vue'
import DiscoverSelector from '../components/DiscoverSelector.vue'
import Gallery from '../components/Gallery.vue'
import Pagination from '../components/Pagination.vue'

const movies = ref(null)

const page = ref(1)

const url_api = ref(undefined);

const buscar = (url) => {
        url_api.value = url;
        getData();
}
const changePage = (value) => {
        page.value = value;
        getData();
}
const getData = async () => {
        movies.value = await (await (await fetch(url_api.value + page.value)).json()).results;
}
</script>
    <template>
        <Pagination @page="changePage" :totalItems="10" :currentPage="page" />
        <DiscoverSelector @url="buscar" />
        <Gallery :movies_result="movies" />
        <Pagination @page="changePage" :totalItems="10" :currentPage="page" />
</template>
    
    <style>
    </style>