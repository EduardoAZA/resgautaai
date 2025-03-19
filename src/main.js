import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Material from '@primevue/themes/material'
import './styles.css'
import 'primeicons/primeicons.css'
import router from './router/routes'

const app = createApp(App);

app.use(PrimeVue, {
  theme : {
    preset: Material,
  },
});


app.use(router);
app.mount("#app");

