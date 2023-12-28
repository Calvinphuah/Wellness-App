<template>
  <div class="container">
    <h1>How are you feeling today?</h1>
    <div class="options">
      <div class="option amazing" @click="$emit('amazing')">Amazing</div>
      <div class="option normal">Normal</div>
      <div class="option sad">Sad</div>
    </div>
    <h2>Not feeling it? <span>Skip</span></h2>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}

.options {
  display: flex;
  justify-content: space-around;
}

.option {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}

.amazing {
  background-color: #72e87c;
}

.normal {
  background-color: yellow;
}

.sad {
  background-color: #ff6f6f;
}
</style>
