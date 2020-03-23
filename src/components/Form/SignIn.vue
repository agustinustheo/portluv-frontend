<template>
    <form>
        <h1>Sign In</h1>
        <p id="notice"></p>
        <div class="field">
            <label for="username">Username</label>
            <input type="text" id="user_username" class="lapor-form-input">
        </div>

        <div class="field">
            <label for="password">Password</label>
            <input type="password" id="user_password" class="lapor-form-input">
        </div>

        <div class="actions">
            <input type="button" value="Sign In" class="lapor-form-button">
            <div class="lapor-signin-button-divider">or</div>
            <a href="<%= auth_github_path %>" class='lapor-signin-github'>
                <img src="../../assets/img/logo/github.png" class="lapor-signin-logo">
                <span>Sign In with Github</span>
            </a>
            <a href="<%= auth_linked_in_path+'?type=signin' %>" class="lapor-signin-linkedin">
                <img src="../../assets/img/logo/linkedin.png" class="lapor-signin-logo">
                <span>Sign In with LinkedIn</span>
            </a>
            <router-link to="/signup">Don't have an account? Sign Up Here!</router-link>
            <router-link to="/">Back to home</router-link>
        </div>
    </form>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  name: 'SignIn',
  mounted: function(){
    var notice = document.getElementById('notice');
    notice.style.display="none";
    var Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1500
    })
    if(notice.innerText.trim()!=""){
        Toast.fire({
            type: 'error',
            title: notice.innerText
        })
        notice.innerText="";
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
