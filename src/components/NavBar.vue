<script setup>
import {ref} from 'vue'
import NavBarElement from './NavBarElement.vue'

const sections= ref(["/", "descubrir", "buscar"]);
const isOpen= ref(false);

function showNavbar(){
    this.isOpen= !this.isOpen;
}
</script>
<template>
    <nav :class="{open: isOpen}" class="topnav" id="myTopnav">
        <template v-for="section in sections">
            <NavBarElement :url="section" />
        </template>
        <a href="javascript:void(0);" class="icon" @click="showNavbar()">
            <i class="fa fa-bars"></i>
        </a>
    </nav>
</template>
<style>
.topnav {
    overflow: hidden;
    background-color: #333;
    margin-bottom: 0px;
}
@media screen and (max-width: 600px) {
    .topnav.open {
        position: relative;
    }
    .topnav.open .icon {
        position: absolute;
        right: 0;
        top: 0;
    }
.topnav.open a {
        float: none;
        display: block;
        text-align: left;
    }
}
</style>