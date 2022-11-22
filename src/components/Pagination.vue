<script setup>
import { ref } from 'vue'
const props = defineProps({
  totalItems: Number,
  currentPage: Number  
})
const page=ref(props.currentPage);
const emit = defineEmits();
 
const changePage = (index) => {
  page.value = index;
  emit('page', page.value);
}
</script>
    <template>
  <div class="pagination">
    <a v-for="index in totalItems" :key="index" @click="changePage(index)" :class="{ pagSelected: currentPage===index }">{{ index }}</a>
  </div>
</template>         
<style>
.pagination {
  display: inline-block;
  }

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination .pagSelected {
  background-color: #04AA6D;
  margin: 2px;
}
</style>
    
    