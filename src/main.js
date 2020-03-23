import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Form from './components/FormLayout.vue';
import LandingPage from './components/LandingPage.vue';
import Main from './components/MainLayout.vue';
import NotFound from './components/NotFound.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: LandingPage },
  { path: '/signup', component: Form },
  { path: '/signin', component: Form },
  { path: '/dashboard', component: Main },
  { path: '/profile', component: Main },
  { path: '/create', component: Main },
  { path: '/connect', component: Main },
  { path: '/404', component: NotFound },  
  { path: '*', redirect: '/404' },  
];

const router = new VueRouter({
  // Originally 'routes: routes' can become 'routes' in Es6
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  // Originally 'router: router' can become 'router' in Es6
  router,
}).$mount('#app')
