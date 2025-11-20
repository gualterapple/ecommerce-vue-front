import { createApp } from 'vue';
import App from './App.vue';
import roteador from '@/router';

const app = createApp(App);

app.use(roteador); 
app.mount('#app');