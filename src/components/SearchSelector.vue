<script setup>
import { ref } from 'vue'

const   query= ref("");
const emit = defineEmits();

function search(){
    emit('search', query.value)
}

</script>
    
    <template>
    <div> <button id="searchButton" @click="search">Buscar</button>
        <span id="spanButton"> <input id="queryInput" type="text" v-model="query"></span>
    </div>
</template>
    
    <style>
    #searchButton {
        float: right;
        border: none;
        border-radius: 30px;
        height: 36px;
        width: 100px;
    }
    
    #spanButton {
        display: block;
        overflow: hidden;
        padding-right: 10px;
    
    }
    
    #queryInput:focus,
    #queryInput {
        width: 100%;
        border: none;
        font-size: 1.2em;
        outline: 0;
        height: 36px;
    
        border-bottom: solid 1px;
    }
    </style>