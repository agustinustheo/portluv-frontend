<template>
  <main class="lapor-main">
    <div class="lapor-signup-content">
        <h1 class="lapor-signup-title">PORTLUV</h1>

        <div class="lapor-signup-form" v-if="page=='signup'">
            <SignUp />
        </div>
        <div class="lapor-signup-form" v-else-if="page=='signin'">
            <SignIn />
        </div>
    </div>
  </main>
</template>

<script>
import SignUp from './Form/SignUp.vue';
import SignIn from './Form/SignIn.vue';

export default {
  name: 'Form',
  components: {
    SignUp,
    SignIn
  },
  data(){
      let URL = window.location.href;
      URL = URL.split('/')[3];
      if(URL=="signup") return { page: "signup" }
      else if (URL=="signin") return { page: "signin" }
  },
  watch:{
    $route(){
      let URL = window.location.href;
      URL = URL.split('/')[3];
      if(URL=="signup") this.page="signup";
      else if (URL=="signin") this.page="signin";
    }
  } 
}
</script>
