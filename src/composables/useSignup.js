import { ref } from 'vue';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const error = ref('');

const signup = async (email, password, displayName) => {
  // Clear all the previous errors
  error.value = null;

  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    if (userCredential) {
      // Updare profile with display name
      await updateProfile(auth.currentUser, {
        displayName
      });
    } else {
      throw new Error('Could not create user');
    }

    console.log(`${email} has been created with displayName: ${displayName}`);

    // Clear error for susccessful sign up
    error.value = null;
  } catch (err) {
    // These two errors cant be the same
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
