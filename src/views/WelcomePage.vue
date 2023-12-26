<template>
  <div class="welcome container">
    <h2>Welcome to the Wellness App</h2>
    <div v-if="isLogin">
      <h2>Login</h2>
      <LoginForm @login="enterApp" />
      <p>Don't have an account? <span @click="isLogin = false">Sign up</span> instead</p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignUpForm @signup="enterApp" />
      <p>Already have an account? <span @click="isLogin = true">Login</span> instead</p>
    </div>
  </div>
</template>

<script setup>
import SignUpForm from '../components/SignUpForm.vue';
import LoginForm from '../components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isLogin = ref(true);
const router = useRouter();

const enterApp = () => {
  router.push({ name: 'Home' });
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}

/* so that the span looks clickable */
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
  cursor: pointer;
}
</style>
