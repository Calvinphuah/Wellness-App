<template>
  {{ isAmazing }}
  {{ isNormal }}
  {{ isSad }}
  <div class="container" v-if="!isAmazing && !isNormal && !isSad">
    <h1>How are you feeling today?</h1>
    <div class="options">
      <div class="option amazing" @click="handleAmazing">Amazing</div>
      <div class="option normal" @click="handleNormal">Normal</div>
      <div class="option sad" @click="handleSad">Sad</div>
    </div>
    <h2>Not feeling it? <span>Skip</span></h2>
  </div>

  <Amazing v-if="isAmazing" @reset="handleReset" />
  <Normal v-if="isNormal" @reset="handleReset" />
  <Sad v-if="isSad" @reset="handleReset" />
</template>

<script setup>
import { ref } from 'vue';
import Amazing from './Amazing.vue';
import Normal from './Normal.vue';
import Sad from './Sad.vue';

const isAmazing = ref(false);
const isNormal = ref(false);
const isSad = ref(false);

const handleAmazing = () => {
  isAmazing.value = true;
  isNormal.value = false;
  isSad.value = false;
  console.log('amazing event emitted');
};

const handleNormal = () => {
  isAmazing.value = false;
  isNormal.value = true;
  isSad.value = false;
  console.log('normal event emitted');
};

const handleSad = () => {
  isAmazing.value = false;
  isNormal.value = false;
  isSad.value = true;
  console.log('sad event emitted');
};

const handleReset = () => {
  isAmazing.value = false;
  isNormal.value = false;
  isSad.value = false;
  console.log('Reset');
};
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
