import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.config.globalProperties.$api_key= 'b7048181b82a3678ad874fa00559a427';
app.config.globalProperties.$language = "es-Es";
app.config.globalProperties.$type_trend = 'movie' 
app.config.globalProperties.$include_adult = 'false' 
app.config.globalProperties.$type_media = 'movie' 

app.use(router)

app.mount('#app')
