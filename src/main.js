import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(BootstrapVue);

createApp(App).mount('#app')
