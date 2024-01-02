<template>
  <div class="container">Amazing<button @click="$emit('reset')">Back</button></div>
  <ChatWindow />
</template>

<script setup>
import ChatWindow from './ChatWindow.vue';
</script>

<style scoped></style>
