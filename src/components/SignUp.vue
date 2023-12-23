<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName" />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Sign Up</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import useSignup from '../composables/useSignup';

const { error, signup, isPending } = useSignup();

const displayName = ref('');
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  console.log('submitted!');
};
</script>

<style scoped></style>
