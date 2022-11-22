<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const props = defineProps({
    url: ""
})


const route = useRoute();
</script>

<template>
    <RouterLink :to="url"
        :class="(url === route.name || (route.name === 'tendencias' && url === '/')) ? 'active' : 'else_class'">{{ url !=
                "/" ? url : "tendencias"
        }}</RouterLink>
</template>
 G
<style>
.topnav a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

.topnav a:hover {
    background-color: #ddd;
    color: black;
}

.topnav a.active {
    background-color: #04AA6D;
    color: white;
}

.topnav .icon {
    display: none;
}

@media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {
        display: none;
    }

    .topnav a.icon {
        float: right;
        display: block;
    }
}

@media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {
        display: none;
    }

    .topnav a.icon {
        float: right;
        display: block;
    }
}
</style>