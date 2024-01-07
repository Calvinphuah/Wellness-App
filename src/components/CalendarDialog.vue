<template>
  <div v-if="showDialog" class="dialog-overlay" @click="closeDialog">
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>Dialog Title</h2>
        <button @click="$emit('closeDialog')">X</button>
      </div>
      <div class="dialog-body">
        <p>Dialog content goes here...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  dialogVisible: Boolean
});

// Access dialogVisible value from props
const showDialog = ref(props.dialogVisible);
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.dialog-body {
  line-height: 1.6;
}
</style>
