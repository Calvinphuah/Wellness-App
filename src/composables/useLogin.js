import { ref } from 'vue';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const error = ref(null);

const login = async (email, password) => {
  // Reset errors
  error.value = null;

  try {
    const res = await signInWithEmailAndPassword(email, password);

    // Clear error for susccessful sign in
    error.value = null;
    console.log('res', res);
    return res;
  } catch (err) {
    error.value = 'Incorrect login credentials';
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
