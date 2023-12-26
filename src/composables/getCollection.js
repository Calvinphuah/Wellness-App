import { ref, watchEffect } from 'vue';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';

const getCollection = (collectionName, q) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef;

  if (q) {
    collectionRef = query(collection(db, collectionName), where(...q));
  } else {
    collectionRef = query(collection(db, collectionName));
  }

  const unsubscribe = onSnapshot(
    collectionRef,
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      error.value = 'Error fetching documents: ' + err;
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => {
      unsubscribe();
    });
  });

  return { documents, error };
};

export default getCollection;
