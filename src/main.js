import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
// import './assets/css/setting.css'


const app = createApp(App);

app.use(vuetify);

// Object.keys(vuetify.components).forEach(key => {
//     app.component(key, vuetify.components[key]);
//   });

app.mount('#app');
