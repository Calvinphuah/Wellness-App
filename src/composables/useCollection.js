import { ref } from 'vue';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const useCollection = (collectionName) => {
  const error = ref(null);
  const addDocument = async (doc) => {
    error.value = null;
    try {
      // When we add a doc we get back a document reference
      const docRef = await addDoc(collection(db, collectionName), doc);

      console.log('Done!');
      return docRef;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, addDocument };
};

export default useCollection;
