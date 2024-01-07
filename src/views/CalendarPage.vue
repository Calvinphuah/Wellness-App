/
<template>
  <Calendar v-if="false" />
  <button @click="toggleDialog">Open Dialog</button>
  <CalendarDialog v-if="showDialog" :dialogVisible="showDialog" @closeDialog="closeDialog" />
</template>

<script setup>
import { ref } from 'vue';
import Calendar from '../components/Calendar.vue';
import CalendarDialog from '../components/CalendarDialog.vue';

const showDialog = ref(false);
const toggleDialog = () => {
  showDialog.value = !showDialog.value;
};

const closeDialog = () => {
  showDialog.value = false;
};
</script>

<style lang="scss" scoped></style>
