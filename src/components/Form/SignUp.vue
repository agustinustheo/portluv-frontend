<template>
    <form>
        <h1>Sign Up</h1>
        <p id="notice"></p>
        <div class="field">
            <label for="username">Username</label>
            <input type="text" id="user_username" class="lapor-form-input">
        </div>

        <div class="field">
            <label for="email">Email</label>
            <input type="text" id="user_email" class="lapor-form-input">
        </div>

        <div class="field">
            <label for="password">Password</label>
            <input type="password" id="user_password" class="lapor-form-input">
        </div>

        <div class="actions">
            <input type="button" value="Sign Up" class="lapor-form-button">
            <div class="lapor-signin-button-divider">or</div>
            <a href="<%= auth_github_path %>" class='lapor-signin-github'>
                <img src="../../assets/img/logo/github.png" class="lapor-signin-logo">
                <span>Sign Up with Github</span>
            </a>
            <a href="<%= auth_linked_in_path+'?type=signin' %>" class="lapor-signin-linkedin">
                <img src="../../assets/img/logo/linkedin.png" class="lapor-signin-logo">
                <span>Sign Up with LinkedIn</span>
            </a>
            <router-link to="/signin">Have an account? Sign In Here!</router-link>
            <router-link to="/">Back to home</router-link>
        </div>
    </form>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  name: 'SignUp',
  mounted: function(){
    var notice = document.getElementById('notice');
    if(notice!=null){
      var errorList = notice.getElementsByTagName('li');
      var errorText = "";
      for(let i=0;i<errorList.length;i++){
        errorText+=errorList[i].innerText+'<br>';
      }
      if(notice.innerText.trim()!=""){
          Swal.fire({
            type: 'error',
            title: 'Error',
            html: '<br>'+errorText
          });
          notice.innerText="";
      }
    }
  }
}
</script>

<style scoped>
#laporNavbar{
    display: none;
}
.lapor-main{
    height: calc((100vh - var(--paddingSize)) - var(--navbarSize));
}
.lapor-landing-page-title{
    color: white;
}
</style>
