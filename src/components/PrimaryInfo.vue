<script setup>
    const props = defineProps({
        backdrop_path: null,
        videos: null,
        overview: null,
        title: null
    })
    
    </script>
    <template>
     <div id="infoPrimaria"
            :style="{ 'background-image': 'url(https://image.tmdb.org/t/p/original/' + backdrop_path + ')' }">
            <h1 class="titulo">{{ title }}</h1>

            <iframe v-if="videos.results.length" class="trailer" allow="fullscreen"
                :src="'https://www.youtube.com/embed/' + videos.results[0].key + '?rel=0&amp;amp;controls=1&amp;amp;showinfo=0'">
            </iframe>
            <p v-if="overview!=''" class="descripcion">{{ overview }}</p>
        </div>
    </template>
        
     
    <style>
     /*Informacion*/
#infoPrimaria {
    background-position: center;
    background-size: cover;
}

.titulo {
    margin-left: 25px;
    padding-top: 20px;
    color: black;
}

.trailer {
    display: block;
    margin: 0 auto;
    width: 700px;
    height: 405px;
}

.botonPlay {
    display: block;
    background-color: rgba(0, 0, 0, 0.719);
    color: white;
    padding: 10px 20px 10px 20px;
    width: fit-content;
    font-size: 20px;
    border-radius: 10px;
    text-decoration: none;
    margin: 10px auto 10px auto;
}

.descripcion {
    max-width: 700px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.719);
    font-size: 20px;
    color: white;
    border-radius: 10px;
    padding: 20px 20px 20px 20px;
}
@media (max-width: 720px) {
    .trailer {
        width: 100%;
    }
}
    </style>
    
    