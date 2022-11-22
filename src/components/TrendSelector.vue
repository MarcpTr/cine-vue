<script setup>
import { ref, computed } from 'vue'
const picked = ref("day")
const values = ref(["day", "week"]);
const emit = defineEmits();

const time_window = computed(() => {
    emit('time_window', picked.value)
    return picked.value;
});
</script>
<template>
    <article>
        <header>
            <h1 id="trendTitle">Lo más popular {{ time_window=="day" ? "del día" : "de la semana"  }}</h1>
            <div class="radio">
                <template v-for="item in values">
                    <input v-model="picked" type="radio" :id="item + 'Radio'" :value="item">
                    <label :for="item + 'Radio'">{{ item }}</label><br>
                </template>
            </div>
        </header>
    </article>
</template>
<style>  
</style>