<template>
  <div class="welcome container">
    <p>welcome</p>
    <!-- <SignUpForm /> -->
    <LoginForm />

  </div>
</template>

<script setup>
import SignUpForm from '../components/SignUpForm.vue';
import LoginForm from '../components/LoginForm.vue';

</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>
