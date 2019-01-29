import Vue from 'vue';
import App from './App.vue';
import router from './routes/routes';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';


Vue.config.productionTip = false

Vue.use(VueRouter,VueResource)

 new Vue({
  el: '#app',
   router,
  render: h => h(App)
})