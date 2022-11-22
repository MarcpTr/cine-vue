<script setup>

const props = defineProps({
    runtime: null,
    videos: null,
    budget: null,
    title: null,
    original_language: null,
    genres: null,
    production_companies: null,
    credits: null
})


</script>
    <template>
    <div id="infoSecundaria">
        <div id="metaDatos">
            <div class="meta">
                <h2>Título original</h2>
                <p>{{ title }}</p>
            </div>
            <div class="meta">
                <h2>Duración</h2>
                <p>{{ runtime }} min</p>
            </div>
            <div class="meta">
                <h2>Lengua original</h2>
                <p>{{ original_language }}</p>
            </div>
            <div class="meta">
                <h2>Presupuesto</h2>
                <p>{{ budget == "0" ? "desconocido" : budget + '$' }}</p>
            </div>
            <div class="meta">
                <h2>Géneros</h2>
                <li v-for="genre in genres">{{ genre.name }}</li>
            </div>
            <div v-if="production_companies.length" class="meta">
                <h2>Productoras</h2>
                <li v-for="productora in production_companies">{{ productora.name }}</li>
            </div>
        </div>
        <div id="media">
            <div class="actores scroll"> <template v-for="actor in credits.cast">
                    <div class="actor"><img :src="'https://image.tmdb.org/t/p/original/' + actor.profile_path"
                            :alt="actor.name">
                        <div class="caption">
                            <p>{{ actor.name }}</p>
                        </div>
                    </div>
                </template>
            </div>
            <div class="videos scroll">
                <iframe v-for="video in videos.results" class="video"
                    :src="'https://www.youtube.com/embed/' + video.key + '?rel=0&amp;controls=0&amp;showinfo=0'">
                </iframe>
            </div>
        </div>
    </div>
</template>
        
     
    <style>
    #infoSecundaria {
        display: grid;
        grid-template-columns: 30% 70%;
        background: rgb(19, 19, 19);
        color: white;
    }
    
    #metaDatos {
        padding-left: 25px;
    }
    
    .actores,
    .videos {
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        max-width: 100%;
    }
    
    .actores .actor {
        margin: 0px 5px 0px 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .actores .actor img {
        width: 100px;
    }
    
    .video {
    
        min-width: 700px;
        min-height: 405px;
    }
    

.scroll::-webkit-scrollbar {
    width: 20px;
}

/* Track */
.scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */
.scroll::-webkit-scrollbar-thumb {
    background: rgba(80, 74, 74, 0.726);
    border-radius: 10px;
}

/* Handle on hover */
.scroll::-webkit-scrollbar-thumb:hover {
    background: rgb(80, 74, 74);
}
@media (max-width: 950px) {
    #infoSecundaria {
        display: flex;
        flex-direction: column;
    }
}
    </style>
    
    