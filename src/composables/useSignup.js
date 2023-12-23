import { ref } from 'vue';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const error = ref('');

const signup = async (email, password, displayName) => {
  try {
    // Clear all the previous errors
    error.value = null;

    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    if (userCredential) {
      // Updare profile with display name
      await updateProfile(auth.currentUser, {
        displayName
      });
    }
    a;
  } catch (error) {}
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
