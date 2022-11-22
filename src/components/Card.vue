<script setup>
    import { useRoute } from 'vue-router'

const props = defineProps({
  title: "",
  release_date: "",
  poster_path: "",
  id_movie: ""
})
const imgurl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

</script> 
    <template> 
    <article class="card"><RouterLink :to="'/info?id='+id_movie"><img
                :src="imgurl+poster_path"></RouterLink>
        <div class="info">
            <h2><RouterLink :to="'/info?id='+id_movie">{{title}}</RouterLink></h2>
            <p v-if="release_date!==undefined">{{release_date.split("-").reverse().join("-")}}</p>
        </div>
    </article>
</template>

<style>
    
.card {
    max-width: 180px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 5px 5px 5px 5px;
    border-radius: 5px;
}
.card img {
    width: 180px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.card .info {
    margin-left: 15px;
}
.card .info h2 {
    margin: 0px;
    margin-bottom: 5px;
    font-size: larger;
}
.card .info h2 a{
     text-decoration: none;
     color: black;
}
.card .info p {
    margin: 0px;
    margin-bottom: 8px;
}
</style>