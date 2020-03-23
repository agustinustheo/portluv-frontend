<template>
<div>
  <header id="laporNavbar" class="lapor-navbar">
      <router-link to="/dashboard" class="lapor-navbar-item">DASHBOARD</router-link>
      <router-link to="/profile" class="lapor-navbar-item">PROFILE</router-link>
      <router-link to="/create" class="lapor-navbar-item">CREATE</router-link>
      <router-link to="/connect" class="lapor-navbar-item">CONNECT</router-link>
      <router-link to="/signin" class="lapor-navbar-item lapor-signin-button">SIGN OUT</router-link>
      <label class="lapor-burger-label" for="laporAltNavBarTrigger">
        <div></div>
        <div></div>
        <div></div>
      </label>
  </header>
  <span class="lapor-landing-page-title lapor-alt-navbar-title">PORTLUV</span>
  <input type="checkbox" id="laporAltNavBarTrigger" class="lapor-burger">
  <section class="lapor-alt-navbar">
      <router-link to="/dashboard" class="lapor-alt-navbar-item">DASHBOARD</router-link>
      <router-link to="/profile" class="lapor-alt-navbar-item">PROFILE</router-link>
      <router-link to="/create" class="lapor-alt-navbar-item">CREATE</router-link>
      <router-link to="/connect" class="lapor-alt-navbar-item">CONNECT</router-link>
      <router-link to="/signin" class="lapor-alt-navbar-item">SIGN OUT</router-link>
  </section>
  <main class="lapor-main" v-if="page=='dashboard'">
    <Dashboard />
  </main>
  <main class="lapor-main" v-else-if="page=='profile'">
    <Profile />
  </main>
  <main class="lapor-main" v-else-if="page=='create'">
    <Create />
  </main>
  <main class="lapor-main" v-else-if="page=='connect'">
    <Connect />
  </main>
</div>
</template>

<script>
import Dashboard from './Main/Dashboard.vue';
import Profile from './Main/Profile.vue';
import Create from './Main/Create.vue';
import Connect from './Main/Connect.vue';

export default {
    name: 'Main',
    components: {
      Dashboard,
      Profile,
      Create,
      Connect
    },
    data(){
        let URL = window.location.href;
        URL = URL.split('/')[3];
        if(URL=="dashboard") return { page: "dashboard" }
        else if (URL=="profile") return { page: "profile" }
        else if (URL=="create") return { page: "create" }
        else if (URL=="connect") return { page: "connect" }
    },
    watch:{
      $route(){
        let URL = window.location.href;
        URL = URL.split('/')[3];
        if(URL=="dashboard") this.page="dashboard";
        else if (URL=="profile") this.page="profile";
        else if (URL=="create") this.page="create";
        else if (URL=="connect") this.page="connect";
      }
    } 
}
</script>
