<template>
  <div>Home</div>
  <button @click="handleSubmit">Click</button>

  <div>{{ documents }}</div>
</template>

<script setup>
import { ref } from 'vue';
import useCollection from '../composables/useCollection';
import getCollection from '../composables/getCollection';

const { error, addDocument } = useCollection('data');
const { errorGetCollection, documents } = getCollection(
  'data'
  // , ['name', '==', 'Calvin']
);
console.log(documents.value);

const handleSubmit = async () => {
  const doc = { name: 'Calvin', age: 25 };
  await addDocument(doc).then((docRef) => {
    console.log('Document added with ID: ', docRef.id);
  });
};
</script>

<style scoped></style>
