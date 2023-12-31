import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Wujie from 'wujie-vue3'; //直接引入封装的vue3框架

const { preloadApp } = Wujie;

const app = createApp(App);
app.use(router).use(Wujie);
app.mount('#app');
preloadApp({ name: 'react', url: 'http://localhost:5174/', exec: true });
preloadApp({ name: 'vue3', url: 'http://localhost:5175/', exec: true });
